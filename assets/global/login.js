/*!
    * ©️ 2025 Projekt City Ltd. | All rights reserved
    * 
    * This code is the property of Projekt City Ltd. and may not be copied or redistributed without permission
    * Legal basis: This code is intended for use solely on the sites of Projekt City
    * Redistribution or use on other sites, not related to Projekt City, is strictly prohibited
    * For more information, please contact us at: projektcityofficial@gmail.com
    * 
    * Script version: 1.1
*/

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
            document.getElementById("signin-container").style.display = 'none';
            document.getElementById("mb-signin-container").style.display = 'none';
            document.getElementById("welcome-container").style.display = 'block';
            document.getElementById("mb-welcome-container").style.display = 'block';
            getUserInfo(token);
        }
    }
});

function getUserInfo(token) {
    fetch("https://discord.com/api/users/@me", {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(user => {
        const avatarUrl = user.avatar 
            ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
            : `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`;

            document.getElementById("profile-pic").src = avatarUrl;
            document.getElementById("mb-profile-pic").src = avatarUrl;
    })
    .catch(error => {
        console.error("Error while receiving user information:", error);
        localStorage.removeItem('discord_token');
    });
}

document.getElementById('welcome-container').addEventListener('click', function() {
    window.open("/account", "_parent");
});

document.getElementById('mb-welcome-container').addEventListener('click', function() {
    window.open("/account", "_parent");
});

document.getElementById("signin-container").addEventListener('click', function() {
    localStorage.removeItem('discord_token');
    window.open("https://discord.com/oauth2/authorize?client_id=1308503690449256561&redirect_uri=https://projektcity.github.io/login&response_type=token&scope=identify%20email", "_parent");
});

document.getElementById("mb-signin-container").addEventListener('click', function() {
    localStorage.removeItem('discord_token');
    window.open("https://discord.com/oauth2/authorize?client_id=1308503690449256561&redirect_uri=https://projektcity.github.io/login&response_type=token&scope=identify%20email", "_parent");
});