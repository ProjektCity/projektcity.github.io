document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = urlParams.get('access_token');
    
    if (accessToken) {
        localStorage.setItem('discord_token', accessToken);
        removeAccessTokenFromURL();
        getUserInfo(accessToken);
    } else {
        const token = localStorage.getItem('discord_token');
        if (token) {
            getUserInfo(token);
        } else {
            console.log("[DISCORD] No access token found in local storage.");
            window.open("https://discord.com/oauth2/authorize?client_id=1308503690449256561&redirect_uri=https://projektcity.github.io/account&response_type=token&scope=identify%20email", "_parent");
        }
    }

    const autofill = localStorage.getItem("autofill") === "true";

    if (localStorage.getItem("autofill") === "true") {
        document.getElementById("enableAutofill").checked = true;
    }
});

function removeAccessTokenFromURL() {
    const url = window.location.href.split('#')[0];
    window.history.replaceState({}, document.title, url);
}

function getUserInfo(token) {
    fetch("https://discord.com/api/users/@me", {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(user => {
        document.getElementById("signin-container").style.display = 'none';
        document.getElementById("mb-signin-container").style.display = 'none';
        document.getElementById("welcome-container").style.display = 'block';
        document.getElementById("mb-welcome-container").style.display = 'block';
        document.getElementById("username").textContent = user.username;
        document.getElementById("email").textContent = user.email;
        if (localStorage.getItem("autofill") === "true") {
            document.getElementById("enableAutofill").checked = true;
            document.getElementById("report-promt-mail").value = user.email;
        } else {
            console.log("Autofill is disabled, email field will not be filled.");
        }

        const avatarUrl = user.avatar 
            ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
            : `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`;

        document.getElementById("profile-pic").src = avatarUrl;
        document.getElementById("mb-profile-pic").src = avatarUrl;
        console.log("[DISCORD] User information received successfully:", user);
    })
    .catch(error => {
        console.error("[DISCORD] Error while receiving user information:", error);
        localStorage.removeItem('discord_token');
    });
}

document.getElementById("generalSettings").addEventListener("click", function() {
    document.getElementById("generalSettings").classList.add("active");
    document.getElementById("preferencesSettings").classList.remove("active");
    document.getElementById("preferencesContent").style.display = "none";
    document.getElementById("generalContent").style.display = "block";
});

document.getElementById("preferencesSettings").addEventListener("click", function() {
    document.getElementById("generalSettings").classList.remove("active");
    document.getElementById("preferencesSettings").classList.add("active");
    document.getElementById("preferencesContent").style.display = "block";
    document.getElementById("generalContent").style.display = "none";
});

document.getElementById("enableAutofill").addEventListener("click", function() {
    const checkbox = document.getElementById("enableAutofill");

    if (checkbox.checked) {
        localStorage.setItem("autofill", "true");
        console.log("[DISCORD] set_autofill=true");
    } else {
        localStorage.setItem("autofill", "false");
        console.log("[DISCORD] set_autofill=false");
    }
});