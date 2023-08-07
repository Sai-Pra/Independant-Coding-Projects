// Variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const characterContainer = document.getElementById("characterContainer");
let characterImage = null;
let characterX = 450;
let characterY = 0;
let characterWidth = 50;
let characterHeight = 50;
let characterActive = false;
let resizeArrow = null;
let resizeMode = false;
let cropMode = false;

// Event Listeners
document.getElementById("fileInput").addEventListener("change", loadImage);
document.getElementById("loadCharacter").addEventListener("click", loadCharacterImage);
document.getElementById("cropButton").addEventListener("click", enableCropMode);

// Functions
function loadImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const image = new Image();
        image.onload = function () {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
        };
        image.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function loadCharacterImage() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            characterImage = new Image();
            characterImage.onload = function () {
                drawCharacterImage();
            };
            characterImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
    fileInput.click();
}

function drawCharacterImage() {
    if (!characterImage) return;

    characterContainer.innerHTML = ""; // Clear previous character

    const img = document.createElement("img");
    img.src = characterImage.src;
    img.className = "characterImage";
    img.addEventListener("mousedown", characterOnPress);
    characterContainer.appendChild(img);

    img.width = characterWidth;
    img.height = characterHeight;
    img.style.left = characterX + "px";
    img.style.top = characterY + "px";
    characterActive = true;
    enableButtons(true);
}

function characterOnPress(event) {
    const img = event.target;
    const rect = img.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    characterX = parseFloat(img.style.left);
    characterY = parseFloat(img.style.top);

    if (resizeArrow) {
        characterX += resizeArrow.offsetX;
        characterY += resizeArrow.offsetY;
        img.style.width = characterWidth + "px";
        img.style.height = characterHeight + "px";
        resizeArrow.remove();
        resizeArrow = null;
    }

    img.style.zIndex = "1";
    img.classList.add("active");
    document.addEventListener("mousemove", characterOnDrag);
    document.addEventListener("mouseup", characterOnRelease);

    if (resizeMode) {
        const arrowType = getResizeArrowType(offsetX, offsetY, img.width, img.height);
        if (arrowType) {
            showResizeArrow(arrowType, offsetX, offsetY);
            document.addEventListener("mousemove", resizeCharacterImage);
        }
    }
}

function characterOnDrag(event) {
    const img = event.target;
    if (!characterActive) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left - characterX;
    const y = event.clientY - rect.top - characterY;

    img.style.left = x + "px";
    img.style.top = y + "px";
}

function characterOnRelease(event) {
    const img = event.target;
    img.style.zIndex = "0";
    img.classList.remove("active");
    characterX = parseFloat(img.style.left);
    characterY = parseFloat(img.style.top);
    document.removeEventListener("mousemove", characterOnDrag);
    document.removeEventListener("mouseup", characterOnRelease);
}

function getResizeArrowType(offsetX, offsetY, width, height) {
    if (offsetX < 0) {
        return offsetY < 0 ? "nw" : offsetY > height ? "sw" : "w";
    } else if (offsetX > width) {
        return offsetY < 0 ? "ne" : offsetY > height ? "se" : "e";
    } else {
        return offsetY < 0 ? "n" : "s";
    }
}

function showResizeArrow(type, offsetX, offsetY) {
    resizeArrow = document.createElement("div");
    resizeArrow.className = "resizeArrow";
    resizeArrow.classList.add(type);
    resizeArrow.offsetX = offsetX;
    resizeArrow.offsetY = offsetY;

    characterContainer.appendChild(resizeArrow);
}

function resizeCharacterImage(event) {
    if (!resizeArrow) return;

    const img = characterContainer.querySelector(".characterImage");
    const rect = canvas.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - characterX;
    const offsetY = event.clientY - rect.top - characterY;

    if (resizeArrow.classList.contains("nw")) {
        characterWidth -= offsetX;
        characterHeight -= offsetY;
        characterX += offsetX;
        characterY += offsetY;
    } else if (resizeArrow.classList.contains("n")) {
        characterHeight -= offsetY;
        characterY += offsetY;
    } else if (resizeArrow.classList.contains("ne")) {
        characterWidth += offsetX;
        characterHeight -= offsetY;
        characterY += offsetY;
    } else if (resizeArrow.classList.contains("e")) {
        characterWidth += offsetX;
    } else if (resizeArrow.classList.contains("se")) {
        characterWidth += offsetX;
        characterHeight += offsetY;
    } else if (resizeArrow.classList.contains("s")) {
        characterHeight += offsetY;
    } else if (resizeArrow.classList.contains("sw")) {
        characterWidth -= offsetX;
        characterHeight += offsetY;
        characterX += offsetX;
    } else if (resizeArrow.classList.contains("w")) {
        characterWidth -= offsetX;
        characterX += offsetX;
    }

    img.style.width = characterWidth + "px";
    img.style.height = characterHeight + "px";
    img.style.left = characterX + "px";
    img.style.top = characterY + "px";
}

function enableCropMode() {
    cropMode = true;
    resizeMode = false;
    characterContainer.innerHTML = ""; // Clear character
    characterActive = false;
    enableButtons(false);
}

function enableButtons(enable) {
    document.getElementById("cropButton").disabled = !enable;
}

// Main
function main() {
    canvas.addEventListener("mousedown", function () {
        if (resizeArrow) {
            resizeArrow.remove();
            resizeArrow = null;
        }
        characterContainer.innerHTML = ""; // Clear character on canvas click
        characterActive = false;
        document.removeEventListener("mousemove", resizeCharacterImage);
        enableButtons(false);
    });
}

main();
