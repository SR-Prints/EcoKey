function playSound(soundId) {
    const audio = document.getElementById(soundId);
    audio.currentTime = 0;
    audio.play();

    const catImg = document.getElementById("bongo-cat-img");
    catImg.style.transform = "translateY(-10px)";
    
    setTimeout(() => {
        catImg.style.transform = "translateY(0)";
    }, 100);
}
