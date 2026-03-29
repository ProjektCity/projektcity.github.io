document.addEventListener('DOMContentLoaded', () => {
    let activeOS = 'windows';

    document.getElementById('windows').addEventListener('click', () => switchTab('windows'));
    document.getElementById('linux').addEventListener('click', () => switchTab('linux'));
    document.getElementById('installCopy').addEventListener('click', copyCmd);

    function switchTab(os) {
        activeOS = os;
        document.querySelectorAll('.install-tab-pill').forEach(t => t.classList.remove('active'));
        document.getElementById(os).classList.add('active');
        document.getElementById('cmd-windows').style.display = os === 'windows' ? '' : 'none';
        document.getElementById('cmd-linux').style.display   = os === 'linux'   ? '' : 'none';
    }

    function copyCmd() {
        const el = document.getElementById(`cmd-${activeOS}`);
        if (!el) return;
        navigator.clipboard.writeText(el.textContent.trim());

        const btn = document.getElementById('installCopy');
        btn.classList.add('copied');
        btn.querySelector('.icon-copy').style.display  = 'none';
        btn.querySelector('.icon-check').style.display = '';
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.querySelector('.icon-copy').style.display  = '';
            btn.querySelector('.icon-check').style.display = 'none';
        }, 2000);
    }
});