// First button: EcoKey.dmg download
const downloadBtn = document.getElementById("download-btn");
const fileUrl1 = "https://github.com/SR-Prints/EcoKey/raw/main/EcoKey.dmg";

downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = fileUrl1;
    link.download = "EcoKey.dmg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Second button: Flash Installer download
const flashBtn = document.getElementById("flash-btn");
const fileUrl2 = "YOUR_FLASH_FILE_LINK_HERE"; // Replace with your flash installer file

flashBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = fileUrl2;
    link.download = fileUrl2.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Third button: open external page
const externalBtn = document.getElementById("external-btn");
const externalUrl = "https://github.com/janlunge/pog/releases";

externalBtn.addEventListener("click", () => {
    window.open(externalUrl, "_blank");
});
