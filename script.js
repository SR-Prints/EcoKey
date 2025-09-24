const typingArea = document.getElementById("typing-area");
const wpmDisplay = document.getElementById("wpm");
const startBtn = document.getElementById("start-btn");
const textToType = document.getElementById("text-to-type").innerText;

let startTime;

startBtn.addEventListener("click", () => {
    typingArea.value = "";
    typingArea.disabled = false;
    typingArea.focus();
    startTime = new Date().getTime();
    wpmDisplay.innerText = 0;
});

typingArea.addEventListener("input", () => {
    const typedText = typingArea.value;
    const wordsTyped = typedText.trim().split(/\s+/).filter(w => w.length > 0).length;
    const currentTime = new Date().getTime();
    const minutesElapsed = (currentTime - startTime) / 60000; // convert ms to minutes
    const wpm = Math.floor(wordsTyped / minutesElapsed);
    if (!isNaN(wpm) && minutesElapsed > 0) {
        wpmDisplay.innerText = wpm;
    }
});
