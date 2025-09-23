// Play sound and animate Bongo Cat
function playSound(soundId) {
    const audio = document.getElementById(soundId);
    audio.currentTime = 0;
    audio.play();

    const catImg = document.getElementById("bongo-cat-img");
    catImg.style.transform = "translateY(-15px)";
    
    setTimeout(() => {
        catImg.style.transform = "translateY(0)";
    }, 100);
}

// Floating UI panel animation
const uiPanel = document.getElementById("uiPanel");
let t = 0;

function floatUI() {
    t += 0.01; // speed
    const x = Math.sin(t) * 20; // horizontal drift
    const y = Math.cos(t * 0.9) * 15; // vertical drift
    uiPanel.style.left = `calc(50% + ${x}px)`;
    uiPanel.style.top = `calc(50% + ${y}px)`;
    requestAnimationFrame(floatUI);
}

floatUI();
