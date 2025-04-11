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
            document.getElementById("profileinformation").style.display = 'block';
            document.getElementById("email-header").style.display = 'block';
            getUserInfo(token);
        } if (!token) {
            setTimeout(() => {
                // window.open("https://discord.com/oauth2/authorize?client_id=1308503690449256561&redirect_uri=https://projektcity.github.io/login&response_type=token&scope=identify%20email", "_parent");
            }, 1000);
        }
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
        document.getElementById("username").textContent = user.username;
        document.getElementById("email").textContent = user.email;
        document.getElementById("email-header").style.display = 'block';

        const avatarUrl = user.avatar 
            ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
            : `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`;

        document.getElementById("profile-pic-big").src = avatarUrl;
        document.getElementById("profile-pic").src = avatarUrl;
        document.getElementById("profileinformation").style.display = 'block';
        document.getElementById("signincontainer").style.display = 'none';
        document.getElementById("signin-container").style.display = 'none';
        document.getElementById("welcome-container").style.display = 'block';
        setTimeout(() => {
            // window.open("/account", "_parent");
        }, 1000);
    })
    .catch(error => {
        console.error("Error while receiving user information:", error);
        localStorage.removeItem('discord_token');
    });
}

document.getElementById("signinbtn").addEventListener('click', function() {
    localStorage.removeItem('discord_token');
    window.open("https://discord.com/oauth2/authorize?client_id=1308503690449256561&redirect_uri=https://projektcity.github.io/login&response_type=token&scope=identify%20email", "_parent");
});

document.getElementById('signout-btn').addEventListener('click', function() {
    localStorage.removeItem('discord_token');
    window.open("/login/forward?signin-type=logout&redirect_url=https://projektcity.github.io/login?utm_src=login_page_logout_btn&utm_medium=discord_x_projektcity", "_parent");
});

document.addEventListener("DOMContentLoaded", function() {
    const randomString = generateRandomString(16);
    const linkElement = document.getElementById("session-id");
    if (linkElement) {
        linkElement.textContent = randomString;
    }
    
    function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
});
