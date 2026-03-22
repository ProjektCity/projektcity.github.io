document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('directory');
    if (!section) return;

    section.innerHTML = '';

    const mainDir = document.createElement('div');
    mainDir.className = 'directory';

    const rootDiv = document.createElement('div');
    rootDiv.className = 'root';
    const rootLink = document.createElement('a');
    rootLink.textContent = 'Home';
    rootLink.href = '/';
    rootDiv.appendChild(rootLink);
    mainDir.appendChild(rootDiv);

    function capitalizeFirst(str) {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    let path = window.location.pathname;
    if (path.endsWith('/')) path = path.slice(0, -1);
    if (path.endsWith('index.html')) path = path.slice(0, -10);

    const segments = path.split('/').filter(seg => seg !== '');

    const currentEl = document.createElement('div');
    currentEl.className = 'current';

    if (segments.length === 0) {
        currentEl.textContent = 'Home';
        mainDir.appendChild(currentEl);
        section.appendChild(mainDir);
        return;
    }

    const currentSegment = segments.pop();
    currentEl.textContent = capitalizeFirst(decodeURIComponent(currentSegment));

    if (segments.length > 0) {
        const sepAfterRoot = document.createElement('div');
        sepAfterRoot.className = 'separator';
        sepAfterRoot.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
        mainDir.appendChild(sepAfterRoot);

        const middleDir = document.createElement('div');
        middleDir.className = 'middle-directory';

        let cumulativePath = '';
        for (let i = 0; i < segments.length; i++) {
            const seg = segments[i];
            cumulativePath += '/' + seg;

            const dirDiv = document.createElement('div');
            dirDiv.className = 'directory';

            const link = document.createElement('a');
            link.href = cumulativePath;
            link.textContent = capitalizeFirst(decodeURIComponent(seg));
            dirDiv.appendChild(link);

            middleDir.appendChild(dirDiv);

            if (i < segments.length - 1) {
                const sep = document.createElement('div');
                sep.className = 'separator';
                sep.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
                middleDir.appendChild(sep);
            }
        }

        mainDir.appendChild(middleDir);
    }

    const separator = document.createElement('div');
    separator.className = 'separator';
    separator.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
    mainDir.appendChild(separator);

    mainDir.appendChild(currentEl);
    section.appendChild(mainDir);
});