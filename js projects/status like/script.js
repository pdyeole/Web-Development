const img = document.getElementById("card-img");
const love = document.getElementById("love");
const mediaStatus = document.getElementById("media-status");
const song = document.getElementById("gani-song");

let clickTimer = null;

// Double click for heart animation
img.addEventListener('dblclick', () => {
    // Prevent single-click event from triggering on a double-click
    clearTimeout(clickTimer);

    // Trigger Heart Animation
    love.style.opacity = '0.9';
    love.style.transform = 'translate(-50%,-50%) scale(2) rotate(0deg)';

    setTimeout(() => {
        love.style.opacity = '0';
        love.style.transform = 'translate(-50%,-50%) scale(0) rotate(-90deg)';
    }, 1000);
});

// Single click to play/pause audio and show status icon
img.addEventListener('click', () => {
    clearTimeout(clickTimer);
    
    clickTimer = setTimeout(() => {
        if (song.paused) {
            song.play();
            showMediaIcon('ri-pause-fill');
        } else {
            song.pause();
            showMediaIcon('ri-play-fill');
        }
    }, 250);
});

function showMediaIcon(iconClass) {
    // Update the icon to play or pause
    mediaStatus.className = `ri-heart-fill ${iconClass} media-icon`;

    // Pop in
    mediaStatus.style.opacity = '1';
    mediaStatus.style.transform = 'translate(-50%,-50%) scale(1)';

    // Pop out after 800ms
    setTimeout(() => {
        mediaStatus.style.opacity = '0';
        mediaStatus.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 2000);
}