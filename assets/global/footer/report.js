document.getElementById("SendComplaint").addEventListener("click", function () {
    document.getElementById("report-container").style.display = "block";
    document.documentElement.style.overflowY = "hidden";
    document.getElementById("action-tool-text").innerText = ``;
});

document.getElementById("cancel-report").addEventListener("click", function () {
    document.getElementById("report-container").style.display = "none";
    document.querySelector(".reportc-dialog-textarea").value = '';
    document.querySelector(".reportc-dialog-email").value = '';
    document.getElementById("action-tool-text").innerText = ``;
    document.documentElement.style.overflowY = "scroll";
});

document.getElementById("close-report-container").addEventListener("click", function () {
    document.getElementById("report-container").style.display = "none";
    document.getElementById("action-tool-text").innerText = ``;
    document.documentElement.style.overflowY = "scroll";
});

document.getElementById('send-report').addEventListener('click', function () {
    const complaintText = document.getElementById('report-promt-text').value.trim();
    const email = document.getElementById('report-promt-mail').value.trim();
    const toolText = document.getElementById("action-tool-text");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!complaintText || !email || !emailRegex.test(email)) {
        toolText.style.color = "var(--error-color)";
        toolText.innerText = `Please fill in all fields correctly!`;
        setTimeout(() => {
            toolText.style = ``;
            toolText.innerText = ``;
        }, 3000);
        return;
    }

    const webhookUrl = "https://discord.com/api/webhooks/1358501813040582823/XdqtuqW5YWFdCP2fBlzvTPwr76Wiv27S_tjFkbXOF07o7c48tJ0H-ZGpvqjtFKYDlTG1";

    const payload = {
        content: `📢 **New notification!**\n\n📝 **Message of user:** ${complaintText} \n📧 **Email of user:** ${email}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (response.ok) {
            toolText.style.color = "var(--success-color)";
            toolText.innerText = `Your complaint has been sent successfully!`;
            document.querySelector('.reportc-dialog-textarea').value = '';
            document.getElementById('report-promt-mail').value = '';
            document.documentElement.style.overflowY = "scroll";
            setTimeout(() => {
                document.getElementById('report-container').style.display = 'none';
                toolText.innerText = ``;
            }, 3000);
        } else {
            toolText.style.color = "var(--error-color)";
            toolText.innerText = `An error occurred while sending! Refresh the page and try again.`;
        }
    })
    .catch(error => {
        console.error('Fehler:', error);
        toolText.style.color = "var(--error-color)";
        toolText.innerText = `An error occurred!`;
    });
});

const container = document.getElementById('report-container');
const dragField = document.getElementById("title-drag-container");
let offsetX, offsetY, isDragging = false;

dragField.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - container.offsetLeft;
    offsetY = e.clientY - container.offsetTop;
});

document.addEventListener('mouseup', () => isDragging = false);

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        container.style.left = (e.clientX - offsetX) + 'px';
        container.style.top = (e.clientY - offsetY) + 'px';
    }
});

dragField.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - container.offsetLeft;
    offsetY = touch.clientY - container.offsetTop;
});

document.addEventListener('touchend', () => isDragging = false);

document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        const touch = e.touches[0];
        container.style.left = (touch.clientX - offsetX) + 'px';
        container.style.top = (touch.clientY - offsetY) + 'px';
    }
}, { passive: false });