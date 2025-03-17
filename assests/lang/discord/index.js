document.addEventListener('DOMContentLoaded', function() {
    var language = localStorage.getItem('language');
    var languagecontainer = document.getElementById("language-container");

    if (language === "de_DE") {
        console.log("set-internal-langue=de_DE");
        document.getElementById("german-de_DE").style.display = "block";
        document.getElementById("english-en_US").style.display = "none";
    }
    if (language === "en_US") {
        console.log("set-internal-langue=en_US");
        document.getElementById("english-en_US").style.display = "block";
        document.getElementById("german-de_DE").style.display = "none";
    }
});
document.getElementById("english-en_US").addEventListener("click", function() {
    localStorage.setItem('language', 'de_DE');
    document.getElementById("german-de_DE").style.display = "block";
    document.getElementById("english-en_US").style.display = "none";
    console.log("set-internal-langue=de_DE");
    // Language Banner
    document.getElementById("ui-text-overay").style.display = "block";
    document.getElementById("ui-content").innerHTML = `<a>Changed the language to "German (DE)"</a>`
    setTimeout(() => {
        document.getElementById("ui-text-overay").style.display = "none";
        document.getElementById("ui-content").innerHTML = ``
    }, 3000);
});
    
document.getElementById("german-de_DE").addEventListener("click", function() {
    localStorage.setItem('language', 'en_US');
    document.getElementById("english-en_US").style.display = "block";
    document.getElementById("german-de_DE").style.display = "none";
    console.log("set-internal-langue=en_US");
    // Language Banner
    document.getElementById("ui-text-overay").style.display = "block";
    document.getElementById("ui-content").innerHTML = `<a>Changed the language to "English (US)"</a>`
    setTimeout(() => {
        document.getElementById("ui-text-overay").style.display = "none";
        document.getElementById("ui-content").innerHTML = ``
    }, 3000);
});