const raw = "$1,234.50";
const normalized = Number(raw.replace("$", "").replace(/,/g, ""));

console.log(normalized);
