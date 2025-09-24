// First button: regular download
const downloadBtn = document.getElementById("download-btn");
const fileUrl1 = "https://github.com/SR-Prints/EcoKey/raw/main/EcoKey.dmg"; // Replace with your normal download file link

downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = fileUrl1;
    link.download = fileUrl1.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Second button: flash installer download
const flashBtn = document.getElementById("flash-btn");
const fileUrl2 = "https://github.com/SR-Prints/EcoKey/raw/main/EcoKey.dmg";

flashBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = fileUrl2;
    link.download = "EcoKey.dmg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
