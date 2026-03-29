let nameEditorObject = document.getElementById("editor-name");
let nameDisplayObject = document.getElementById("display-name");

nameEditorObject.addEventListener("input", e => {
    nameDisplayObject.textContent = nameEditorObject.value;
})

let rarityDisplayObject = document.getElementById("display-rarity");
let rarityEditorObject = document.getElementById("editor-rarity");
let typeEditorObject = document.getElementById("editor-type");

rarityEditorObject.addEventListener("change", e => {
    rarityDisplayObject.textContent = rarityEditorObject.value + " " + typeEditorObject.value;
    switch (rarityEditorObject.value) {
        case "COMMON":
            nameDisplayObject.style.color = "#FFFFFF";
            rarityDisplayObject.style.color = "#FFFFFF";
            break;
        case "UNCOMMON":
            nameDisplayObject.style.color = "#55FF55";
            rarityDisplayObject.style.color = "#55FF55";
            break;
        case "RARE":
            nameDisplayObject.style.color = "#5555FF";
            rarityDisplayObject.style.color = "#5555FF";
            break;
        case "EPIC":
            nameDisplayObject.style.color = "#AA00AA";
            rarityDisplayObject.style.color = "#AA00AA";
            break;
        case "LEGENDARY":
            nameDisplayObject.style.color = "#FFAA00";
            rarityDisplayObject.style.color = "#FFAA00";
            break;
        case "MYTHIC":
            nameDisplayObject.style.color = "#FF55FF";
            rarityDisplayObject.style.color = "#FF55FF";
            break;
        case "DIVINE":
            nameDisplayObject.style.color = "#55FFFF";
            rarityDisplayObject.style.color = "#55FFFF";
            break;
        case "SPECIAL":
            nameDisplayObject.style.color = "#FF5555";
            rarityDisplayObject.style.color = "#FF5555";
            break;
    }
})

typeEditorObject.addEventListener("change", e => {
    rarityDisplayObject.textContent = rarityEditorObject.value + " " + typeEditorObject.value;
})

let fortuneEditorObject = document.getElementById("editor-fortune");
let miningSpeedEditorObject = document.getElementById("editor-mining-speed");
let pickaxePowerEditorObject = document.getElementById("editor-pickaxe-power");
let xpYieldEditorObject = document.getElementById("editor-xp-yield");

let fortuneTextDisplayObject = document.getElementById("display-fortune-text");
let fortuneAmountDisplayObject = document.getElementById("display-fortune-amount");
let miningSpeedTextDisplayObject = document.getElementById("display-mining-speed-text");
let miningSpeedAmountDisplayObject = document.getElementById("display-mining-speed-amount");
let pickaxePowerTextDisplayObject = document.getElementById("display-pickaxe-power-text");
let pickaxePowerAmountDisplayObject = document.getElementById("display-pickaxe-power-amount");
let xpYieldTextDisplayObject = document.getElementById("display-xp-yield-text");
let xpYieldAmountDisplayObject = document.getElementById("display-xp-yield-amount");

fortuneEditorObject.addEventListener("change", e => {
    if (fortuneEditorObject.value === "0" || fortuneEditorObject.value === "") {
        fortuneTextDisplayObject.innerHTML = "";
        fortuneAmountDisplayObject.innerHTML = "";
    } else {
        fortuneTextDisplayObject.innerHTML = "Fortune: ";
        fortuneAmountDisplayObject.innerHTML = "+" + fortuneEditorObject.value + "<br>";
    }
});

miningSpeedEditorObject.addEventListener("change", e => {
    if (miningSpeedEditorObject.value === "0" || miningSpeedEditorObject.value === "") {
        miningSpeedTextDisplayObject.innerHTML = "";
        miningSpeedAmountDisplayObject.innerHTML = "";
    } else {
        miningSpeedTextDisplayObject.innerHTML = "Mining Speed: ";
        miningSpeedAmountDisplayObject.innerHTML = "+" + miningSpeedEditorObject.value + "<br>";
    }
})

pickaxePowerEditorObject.addEventListener("change", e => {
    if (pickaxePowerEditorObject.value === "0" || pickaxePowerEditorObject.value === "") {
        pickaxePowerTextDisplayObject.innerHTML = "";
        pickaxePowerAmountDisplayObject.innerHTML = "";
    } else {
        pickaxePowerTextDisplayObject.innerHTML = "Pickaxe Power: ";
        pickaxePowerAmountDisplayObject.innerHTML = "+" + pickaxePowerEditorObject.value + "<br>";
    }
});

xpYieldEditorObject.addEventListener("change", e => {
    if (xpYieldEditorObject.value === "0" || xpYieldEditorObject.value === "") {
        xpYieldTextDisplayObject.innerHTML = "";
        xpYieldAmountDisplayObject.innerHTML = "";
    } else {
        xpYieldTextDisplayObject.innerHTML = "XP Yield: ";
        xpYieldAmountDisplayObject.innerHTML = "+" + xpYieldEditorObject.value + "<br>";
    }

    if (fortuneEditorObject.value === "0" || fortuneEditorObject.value === "") {
        if (miningSpeedEditorObject.value === "0" || miningSpeedEditorObject.value === "") {
            if (pickaxePowerEditorObject.value === "0" || pickaxePowerEditorObject.value === "") {
                if (xpYieldEditorObject.value === "0" || xpYieldEditorObject.value === "") {
                    document.getElementById("display-final-break").innerHTML = ""
                } else {
                    document.getElementById("display-final-break").innerHTML = "<br>"
                }
            } else {
                document.getElementById("display-final-break").innerHTML = "<br>"
            }
        } else {
            document.getElementById("display-final-break").innerHTML = "<br>"
        }
    } else {
        document.getElementById("display-final-break").innerHTML = "<br>"
    }

});