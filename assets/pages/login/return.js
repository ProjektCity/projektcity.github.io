document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const redirectUrl = params.get('redirect_url');
    const URLtag = document.getElementById("linkout-URL");

    if (redirectUrl) { 
        if (localStorage.getItem('cookiesAccepted')) {
            const safeUrl = decodeURIComponent(redirectUrl);
            const baseUrl = safeUrl.split('?')[0];

            if (safeUrl.startsWith('https://') || safeUrl.startsWith('http://')) {
                setTimeout(() => {
                    console.log(`Redirect to: ${safeUrl}`);
                    window.location.href = safeUrl;
                }, 100);

                URLtag.textContent = baseUrl;
            } else {
                console.warn('Blocked unsafe website.');
            }
        } else {
            console.log("Cookies have not yet been accepted");
        }
    } else {
        document.getElementById("linkoutURLpretext").remove();
        URLtag.style.color = "#D50100";
    }
});

document.getElementById("linkoutReturnBtn").addEventListener("click", function () {
    window.history.back();
});