window.onload = function() {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = urlParams.get('access_token');
    
    if (accessToken) {
        // Speichern des Tokens im localStorage
        localStorage.setItem('discord_token', accessToken);
        removeAccessTokenFromURL();
        getUserInfo(accessToken);
    } else {
        const token = localStorage.getItem('discord_token');
        if (token) {
            document.getElementById("profileinformation").style.display = 'block';
            getUserInfo(token);
        }
    }
};

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

        const avatarUrl = user.avatar 
            ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
            : `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`;

        document.getElementById("profile-pic").src = avatarUrl;
        document.getElementById("user-info").style.display = 'block';
        document.querySelector('.container-login-btn').style.display = 'none';
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
    window.open("/login/return", "_parent");
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
