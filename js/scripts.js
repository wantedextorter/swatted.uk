document.body.style.overflow = 'hidden';

function showMainPage() {
    document.querySelector('.enter-message').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    document.getElementById('mobile-warning').style.display = 'none';

    var audio = document.getElementById('background-music');
    audio.play();
    showSongPrompt('cried was here!');
}

function closePrompt() {
    document.getElementById('custom-prompt').style.display = 'none';
}

function showPrompt(person) {
    const prompts = {
        'Shiza': 'Extorting bitches, making ritches.',
        'Remsec': 'Rich Sexy Pedo Killer.',
        'MrB': 'A man named MrX once told me, Larp it till you make it. I have made it.',
    };

    const avatars = {
        'Shiza': 'https://files.catbox.moe/zglfke.webp',
        'Remsec': 'https://files.catbox.moe/dnceyu.webp',
        'MrB': 'https://files.catbox.moe/ygtxuu.webp',
    };

    document.getElementById('custom-prompt').style.display = 'flex';
    document.getElementById('user-name').innerText = person;
    document.getElementById('user-bio').innerText = prompts[person];
    document.getElementById('avatar').src = avatars[person];
}

function showSongPrompt(title) {
    const songPrompt = document.getElementById('song-prompt');
    songPrompt.innerText = title;
    songPrompt.style.display = 'block';

    setTimeout(() => {
        songPrompt.style.display = 'none';
    }, 3000);
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.animationDuration = Math.random() * 2 + 1 + 's';
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 300);

function detectMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
        return true;
    }
    return false;
}

window.onload = function() {
    if (detectMobile()) {
        document.getElementById('mobile-warning').style.display = 'block';
    }
};
