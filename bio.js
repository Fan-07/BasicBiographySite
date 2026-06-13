const flipBtn = document.getElementById("flipBtn");
const bioText = document.getElementById("bioText");

const themeBtn = document.getElementById("themeBtn");
const copyBtn = document.getElementById("copyBtn");
const moreBtn = document.getElementById("moreBtn");
const moreInfo = document.getElementById("moreInfo");

let flipped = false;

flipBtn.addEventListener("click", () => {
    flipped = !flipped;
    bioText.style.transform = flipped ? "scaleX(-1)" : "scaleX(1)";
});

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

copyBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText("CatermelonWat@gmail.com");
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy", 1500);
});

moreBtn.addEventListener("click", () => {
    moreInfo.classList.toggle("hidden");
});
