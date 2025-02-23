import os
import subprocess
import sys
import requests
import zipfile
from io import BytesIO
from tqdm import tqdm

def install_package(package_name):
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", package_name])
    except subprocess.CalledProcessError as e:
        print(f"Error while installing the package {package_name}: {e}")
        sys.exit(1)

def downloadextractor(url, target_folder, version):
    try:
        os.makedirs(target_folder, exist_ok=True)
        print(f"Downloading file...")
        with requests.get(url, stream=True) as response:
            response.raise_for_status()
            total_size = int(response.headers.get('content-length', 0))
            block_size = 1024
            progress = tqdm(total=total_size, unit='iB', unit_scale=True, desc="Downloading")
            
            buffer = BytesIO()
            for chunk in response.iter_content(chunk_size=block_size):
                progress.update(len(chunk))
                buffer.write(chunk)
            progress.close()
            
            print("Download finished")

            if total_size != 0 and progress.n != total_size:
                print("ERROR: Download size mismatch.")
                return

            print("Analyzing ZIP file...")
            buffer.seek(0)
            with zipfile.ZipFile(buffer) as zip_file:
                temp_folder = os.path.join(target_folder, "temp_extract")
                os.makedirs(temp_folder, exist_ok=True)
                zip_file.extractall(temp_folder)

                extracted_contents = os.listdir(temp_folder)
                if not extracted_contents:
                    print("ERROR: The ZIP file is empty or invalid.")
                    return
                extracted_folder_name = extracted_contents[0]
                extracted_folder_path = os.path.join(temp_folder, extracted_folder_name)

                final_folder_name = f"Projekt City [V{version}]"
                final_folder_path = os.path.join(target_folder, final_folder_name)

                if os.path.exists(final_folder_path):
                    print(f"The folder '{final_folder_name}' already exists in the saves directory.")
                    print("Do you want to overwrite it? This will remove any progress made in the world! [Y/N]:")
                    while True:
                        user_input = input("> ").strip().lower()
                        if user_input in ["y", "yes"]:
                            print(f"Overwriting the folder '{final_folder_name}'...")
                            import shutil
                            try:
                                shutil.rmtree(final_folder_path)
                            except Exception as e:
                                print(f"ERROR: Could not remove the existing folder: {e}")
                                return
                            break
                        elif user_input in ["n", "no"]:
                            print("Process canceled by user!")
                            return
                        else:
                            print("Do you want to overwrite it? This will remove any progress made in the world! [Y/N]:")
                import shutil
                shutil.move(extracted_folder_path, final_folder_path)
                shutil.rmtree(temp_folder)
        
        print(f"File successfully downloaded and extracted to '{final_folder_path}'!")
        print("You can now start Minecraft and play the world!")
    except requests.exceptions.RequestException as e:
        print(f"Error while downloading: {e}")
    except zipfile.BadZipFile:
        print("ERROR: The downloaded file is not a valid ZIP file.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def useragreement():
    print("--------------------------------------------------")
    print("")
    print("Privacy: https://bit.ly/ProjektCityPrivacy")
    print("Terms:  https://bit.ly/ProjektCityTerms")
    print("Website:  https://bit.ly/ProjektCity")
    print("")
    print("©️ 2025 Projekt City Ltd. | All rights reserved")
    print("")
    print("--------------------------------------------------")
    print("")
    print("You are about to download and extract files using a third party software.")
    print("")
    print("Please ensure that you have installed the extension 'requests' and 'tqdm'.")
    print("If you have not installed these packages, the process wont work correctly!")
    print("")
    print("Do you trust this source and want to continue? [Y/N]: ")
    
    while True:
        user_input = input("> ").strip().lower()
        if user_input in ["y", "yes"]:
            return True
        if user_input in ["n", "no"]:
            print("Process canceled by user!")
            return False
        else:
            print("Do you trust this source and want to continue? [Y/N]: ")

def userinput():
    input("\nPress Enter to close the console...")

def select_version(version_links, version_descriptions):
    print("\nAvailable versions:")
    for version, description in version_descriptions.items():
        print(f"- {version} | {description}")
    
    while True:
        selected_version = input("\nEnter the version you want to download: ").strip()
        if selected_version in version_links:
            return selected_version
        else:
            print("Invalid version. Please select a valid version from the list.")

for package in ["requests", "tqdm"]:
    try:
        __import__(package)
    except ImportError:
        print(f"The package '{package}' is not installed. Installing it now...")
        install_package(package)

appdata_path = os.getenv("APPDATA")
if not appdata_path:
    print("ERROR: Could not resolve the %APPDATA% path.")
    userinput()
    sys.exit(1)

minecraft_saves_folder = os.path.join(appdata_path, ".minecraft", "saves")

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

if not useragreement():
    userinput()
    sys.exit(1)

selected_version = select_version(version_links, version_descriptions)
zip_url = version_links[selected_version]

if zip_url:
    downloadextractor(zip_url, minecraft_saves_folder, selected_version)
else:
    print(f"Version {selected_version} is not available.")

userinput()