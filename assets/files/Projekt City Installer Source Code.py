import os
import sys
import urllib.request
import tkinter as tk
from tkinter import ttk, messagebox
import requests
import zipfile
from io import BytesIO
import shutil
import threading
import tempfile

version_links = {
    "5.0": "https://www.curseforge.com/api/v1/mods/782396/files/6043384/download",
    "4.2": "https://www.curseforge.com/api/v1/mods/782396/files/4832448/download",
    "4.1": "https://www.curseforge.com/api/v1/mods/782396/files/4446473/download",
    "4.0": "https://www.curseforge.com/api/v1/mods/782396/files/4381533/download",
    "3.0": "https://www.curseforge.com/api/v1/mods/782396/files/4326053/download",
    "2.0": "https://www.curseforge.com/api/v1/mods/782396/files/4283975/download",
    "1.1": "https://www.curseforge.com/api/v1/mods/782396/files/4276853/download",
    "1.0": "https://www.curseforge.com/api/v1/mods/782396/files/4276516/download",
}

version_descriptions = {
    "5.0": "Minecraft Version: 1.20 - 1.20.6",
    "4.2": "Minecraft Version: 1.20 - 1.20.6",
    "4.1": "Minecraft Version: 1.19 - 1.19.4",
    "4.0": "Minecraft Version: 1.19 - 1.19.4",
    "3.0": "Minecraft Version: 1.19 - 1.19.4",
    "2.0": "Minecraft Version: 1.19 - 1.19.4",
    "1.1": "Minecraft Version: 1.19 - 1.19.4",
    "1.0": "Minecraft Version: 1.19 - 1.19.4",
}

BG_COLOR = "#1e1e1e"
FG_COLOR = "#ffffff"
BTN_COLOR = "#2a2a2a"
BTN_HOVER = "#333333"
FONT = ("Segoe UI", 10)

icon_url = "https://projektcity.github.io/assets/images/logos/icon-logo.ico"
temp_dir = tempfile.gettempdir()
temp_icon_path = os.path.join(temp_dir, "icon.ico")

try:
    urllib.request.urlretrieve(icon_url, temp_icon_path)
except Exception as e:
    print(f"Error while getting logo: {e}")

root = tk.Tk()
root.title("Projekt City Installer")
root.iconbitmap(temp_icon_path)
root.geometry("500x450")
root.configure(bg=BG_COLOR)
root.resizable(False, False)

try:
    root.iconbitmap(temp_icon_path)
except Exception as e:
    print(f"Error while setting logo: {e}")

style = ttk.Style()
style.theme_use("clam")

style.configure("Dark.TCombobox",
                fieldbackground=BTN_COLOR,
                background=BTN_COLOR,
                foreground=FG_COLOR,
                arrowcolor=FG_COLOR,
                bordercolor=BTN_COLOR,
                lightcolor=BTN_COLOR,
                darkcolor=BTN_COLOR,
                selectbackground=BTN_COLOR,
                selectforeground=FG_COLOR,
                insertcolor=FG_COLOR)
style.map("Dark.TCombobox",
    fieldbackground=[('readonly', BTN_COLOR)],
    background=[('readonly', BTN_COLOR)],
    foreground=[('readonly', FG_COLOR)])

style.configure("Dark.Horizontal.TProgressbar",
                troughcolor=BTN_COLOR,
                background="#0078D7",
                bordercolor=BTN_COLOR,
                lightcolor=BTN_COLOR,
                darkcolor=BTN_COLOR)

def log_message(msg):
    log_text.config(state="normal")
    log_text.insert(tk.END, msg + "\n")
    log_text.see(tk.END)
    log_text.config(state="disabled")

def start_download():
    selected = version_combobox.get()
    if selected not in version_links:
        messagebox.showerror("Error", "Please select a valid version.")
        return

    accepted = messagebox.askyesno(
        "About the End-User Licence Agreement, Privacy Policy and Terms of Use",
        "By clicking “Yes”, you confirm that you have read and accept the End User License Agreement, as well as the Privacy Policy and Terms of Use of Projekt City.\n"
        "You will find the conditions below:\n\n"
        "End-User Licence Agreement: https://projektcity.github.io/legal/eula\n"
        "Terms: https://projektcity.github.io/legal/terms\n"
        "Privacy: https://projektcity.github.io/legal/privacy\n\n"
        "Do you agree?"
    )
    if not accepted:
        log_message("The download has been canceled: Agreement declined.")
        return

    progress_frame.pack_forget()
    log_message("Starting download...")
    progress_frame.pack(pady=(0, 10))
    progress_bar["value"] = 0
    
    threading.Thread(target=lambda: download_extract(version_links[selected], selected), daemon=True).start()

def download_extract(url, version):
    try:
        appdata_path = os.getenv("APPDATA")
        saves_path = os.path.join(appdata_path, ".minecraft", "saves")
        os.makedirs(saves_path, exist_ok=True)

        final_folder = os.path.join(saves_path, f"Projekt City [V{version}]")

        if os.path.exists(final_folder):
            overwrite = messagebox.askyesno(
                "Overwrite?",
                f"Version {version} is already installed. Do you want to overwrite it? This will remove any progress made in the world!\n\n"
                f"This will replace the existing folder: {final_folder}"
            )
            if not overwrite:
                log_message("The installation has been canceled: Existing version preserved.")
                return
            else:
                shutil.rmtree(final_folder)

        with requests.get(url, stream=True) as r:
            r.raise_for_status()
            total_size = int(r.headers.get("content-length", 0))
            data = BytesIO()
            downloaded = 0
            block_size = 1024
            for chunk in r.iter_content(chunk_size=block_size):
                if chunk:
                    data.write(chunk)
                    downloaded += len(chunk)
                    percent = (downloaded / total_size) * 100
                    progress_bar["value"] = percent
                    progress_bar.update()

        log_message("The download is completed. Extracting the file...")
        data.seek(0)
        with zipfile.ZipFile(data) as zip_file:
            temp_folder = os.path.join(saves_path, "temp_extract")
            os.makedirs(temp_folder, exist_ok=True)
            zip_file.extractall(temp_folder)

            extracted_contents = os.listdir(temp_folder)
            if not extracted_contents:
                log_message("Error: The ZIP file is empty!")
                log_message("")
                return

            extracted_folder = os.path.join(temp_folder, extracted_contents[0])

            shutil.move(extracted_folder, final_folder)
            shutil.rmtree(temp_folder)

        log_message("The installation was successful!")
        log_message(f"Installation path: {final_folder}")

    except Exception as e:
        log_message(f"Error: {e}")

tk.Label(root, text="Projekt City Installer", bg=BG_COLOR, fg=FG_COLOR,
         font=("Segoe UI", 16, "bold")).pack(pady=10)

selector_frame = tk.Frame(root, bg=BG_COLOR)
selector_frame.pack(pady=10)

tk.Label(selector_frame, text="Select Version", bg=BG_COLOR, fg=FG_COLOR,
         font=("Segoe UI", 11)).pack()

version_combobox = ttk.Combobox(selector_frame, values=list(version_links.keys()), state="readonly", width=15, justify="center", style="Dark.TCombobox")
version_combobox.pack(pady=5)
version_combobox.set("5.0")

version_description_label = tk.Label(selector_frame, text=version_descriptions["5.0"], bg=BG_COLOR, fg=FG_COLOR, font=FONT)
version_description_label.pack()

def update_description(event):
    version = version_combobox.get()
    version_description_label.config(text=version_descriptions.get(version, ""))

version_combobox.bind("<<ComboboxSelected>>", update_description)

def on_enter(e): download_btn.config(bg=BTN_HOVER)
def on_leave(e): download_btn.config(bg=BTN_COLOR)

download_btn = tk.Label(root, text="Install Now", bg=BTN_COLOR, fg=FG_COLOR,
                        font=("Segoe UI", 11, "bold"), padx=20, pady=10, cursor="hand2")
download_btn.pack(pady=15)
download_btn.bind("<Button-1>", lambda e: start_download())
download_btn.bind("<Enter>", on_enter)
download_btn.bind("<Leave>", on_leave)

progress_frame = tk.Frame(root, bg=BG_COLOR)
progress_bar = ttk.Progressbar(progress_frame, mode="determinate", length=400, style="Dark.Horizontal.TProgressbar")
progress_bar.pack()

log_text = tk.Text(root, height=8, bg=BTN_COLOR, fg=FG_COLOR, wrap="word", font=("Consolas", 9), state="disabled", relief="flat")
log_text.pack(padx=20, pady=(5, 20), fill="both", expand=False)

root.mainloop()