function toggleSound(soundId) {
    const audio = document.getElementById(`audio-${soundId}`);
    const card = document.getElementById(`card-${soundId}`);
    const btn = card.querySelector('.play-btn');

    if (audio.paused) {
        audio.play();
        card.classList.add('active');
        btn.textContent = 'إيقاف';
    } else {
        audio.pause();
        card.classList.remove('active');
        btn.textContent = 'تشغيل';
    }
}

function setVolume(soundId, value) {
    const audio = document.getElementById(`audio-${soundId}`);
    audio.volume = value;
}
