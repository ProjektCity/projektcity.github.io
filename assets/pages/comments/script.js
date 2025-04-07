document.getElementById('send-comment').addEventListener('click', function () {
    const commentText = document.getElementById('comment-promt-text').value.trim();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('mail').value.trim();
    const toolText = document.getElementById('comment-tooltip');
    const checkbox = document.getElementById('acceptbeforesending');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!commentText || !name) {
        toolText.style.color = "var(--error-color)";
        toolText.innerText = `Please fill in all required fields correctly!`;
        setTimeout(() => {
            toolText.style = ``;
            toolText.innerText = ``;
        }, 3000);
        return;
    }

    if (commentText.length < 20) {
        toolText.style.color = "var(--error-color)";
        toolText.innerText = `Your comment must be at least 20 characters long.`;
        setTimeout(() => {
            toolText.style = ``;
            toolText.innerText = ``;
        }, 3000);
        return;
    }

    if (!checkbox.checked) {
        toolText.style.color = "var(--error-color)";
        toolText.innerText = `Please read and accept the terms before sending!`;
        setTimeout(() => {
            toolText.style = ``;
            toolText.innerText = ``;
        }, 3000);
        return;
    }

    if (email && !emailRegex.test(email)) {
        toolText.style.color = "var(--error-color)";
        toolText.innerText = `Please enter a valid email address!`;
        setTimeout(() => {
            toolText.style = ``;
            toolText.innerText = ``;
        }, 3000);
        return;
    }

    // API-URL, die auf deine Vercel-Domain zeigt
    const apiUrl = "https://projektcity-api.vercel.app/api/comments";

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            commentText: commentText,
            name: name,
            email: email
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            toolText.style.color = "var(--success-color)";
            toolText.innerText = `Your comment has been sent successfully!`;
            document.getElementById('comment-promt-text').value = '';
            document.getElementById('name').value = '';
            document.getElementById('mail').value = '';
                document.getElementById("acceptbeforesending").checked = false;
            document.documentElement.style.overflowY = "scroll";
            setTimeout(() => {
                toolText.innerText = ``;
            }, 3000);
        } else {
            toolText.style.color = "var(--error-color)";
            toolText.innerText = `An error occurred while sending: ${data.error || 'Unknown error'}`;
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        toolText.style.color = "var(--error-color)";
        toolText.innerText = `An error occurred while sending!`;
    });
});
