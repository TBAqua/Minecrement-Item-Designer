const nameEditor = document.getElementById("editor-name"),
    nameDisplay = document.getElementById("display-name"),
    rarityEditor = document.getElementById("editor-rarity"),
    rarityDisplay = document.getElementById("display-rarity"),
    typeEditor = document.getElementById("editor-type"),
    materialEditor = document.getElementById("editor-material"),
    statEditors = {
        fortune: document.getElementById("editor-fortune"),
        mining_speed: document.getElementById("editor-mining-speed"),
        pickaxe_power: document.getElementById("editor-pickaxe-power"),
        xp_yield: document.getElementById("editor-xp-yield")
    },
    statDisplays = {
        fortune: [document.getElementById("display-fortune-text"), document.getElementById("display-fortune-amount")],
        mining_speed: [document.getElementById("display-mining-speed-text"), document.getElementById("display-mining-speed-amount")],
        pickaxe_power: [document.getElementById("display-pickaxe-power-text"), document.getElementById("display-pickaxe-power-amount")],
        xp_yield: [document.getElementById("display-xp-yield-text"), document.getElementById("display-xp-yield-amount")]
    },
    finalBreak = document.getElementById("display-final-break");

nameEditor.addEventListener("input", () => nameDisplay.textContent = nameEditor.value);

const rarityColors = {
    COMMON: "#FFFFFF", UNCOMMON: "#55FF55", RARE: "#5555FF",
    EPIC: "#AA00AA", LEGENDARY: "#FFAA00", MYTHIC: "#FF55FF",
    DIVINE: "#55FFFF", SPECIAL: "#FF5555"
};

function updateRarity() {
    const color = rarityColors[rarityEditor.value] || "#FFFFFF";
    nameDisplay.style.color = rarityDisplay.style.color = color;
    rarityDisplay.textContent = `${rarityEditor.value} ${typeEditor.value}`;
}
rarityEditor.addEventListener("change", updateRarity);
typeEditor.addEventListener("change", updateRarity);

function updateStat(stat) {
    const value = statEditors[stat].value;
    const [textEl, amountEl] = statDisplays[stat];
    if (!value || value === "0") {
        textEl.textContent = amountEl.textContent = "";
    } else {
        textEl.textContent = stat.replace("_", " ").replace(/\b\w/g, c => c.toUpperCase()) + ": ";
        amountEl.innerHTML = "+" + value + "<br>";
    }
    finalBreak.innerHTML = Object.values(statEditors).some(e => e.value && e.value !== "0") ? "<br>" : "";
}

for (let stat in statEditors) statEditors[stat].addEventListener("change", () => updateStat(stat));

// MiniMessage color mapping
const rarityMiniMessageColors = {
    COMMON: "<white>",
    UNCOMMON: "<green>",
    RARE: "<blue>",
    EPIC: "<dark_purple>",
    LEGENDARY: "<gold>",
    MYTHIC: "<light_purple>",
    DIVINE: "<aqua>",
    SPECIAL: "<red>"
};

document.getElementById("export-button").addEventListener("click", async () => {
    try {
        const item = exportItem();
        const json = JSON.stringify(item, null, 2);
        await navigator.clipboard.writeText(json);
        alert("✅ Item copied to clipboard!");
    } catch (err) {
        console.error("Failed to copy:", err);
        alert("❌ Failed to copy item. See console for details.");
    }
});

function exportItem() {
    const stats = {};
    const lore = [""];

    const loreMap = {
        fortune: { label: "Fortune", color: "<gold>" },
        mining_speed: { label: "Mining Speed", color: "<gold>" },
        pickaxe_power: { label: "Pickaxe Power", color: "<dark_purple>" },
        xp_yield: { label: "XP Yield", color: "<aqua>" }
    };

    for (let stat in statEditors) {
        const val = Number(statEditors[stat].value);
        if (val) {
            stats[stat] = val;
            const { label, color } = loreMap[stat];
            lore.push(`<gray>${label}: ${color}+${val}`);
        }
    }

    if (rarityEditor.value) lore.push("");

    const rarityValue = rarityEditor.value || "COMMON";
    const typeValue = typeEditor.value || "";
    const colorTag = rarityMiniMessageColors[rarityValue] || "<white>";
    lore.push(`${colorTag}${rarityValue} ${typeValue}`);

    return {
        item_type: materialEditor.value,
        stats,
        name: nameEditor.value,
        rarity: rarityValue,
        type: typeValue,
        lore
    };
}

document.getElementById("import-button").addEventListener("click", async () => {
    try {
        const text = await navigator.clipboard.readText();
        const item = JSON.parse(text);

        nameEditor.value = item.name || "";
        materialEditor.value = item.item_type || "";

        for (let stat in statEditors) {
            statEditors[stat].value = item.stats?.[stat] || "";
            updateStat(stat);
        }

        rarityEditor.value = item.rarity || "COMMON";
        typeEditor.value = item.type || "";
        updateRarity();

        alert("✅ Item imported from clipboard!");
    } catch (err) {
        console.error("Failed to import:", err);
        alert("❌ Failed to import item. Make sure clipboard contains valid JSON.");
    }
});