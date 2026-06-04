const elements = [
  { id: "btnLogin", visible: true },
  { id: "btnCancel", visible: false },
  { id: "btnSubmit", visible: true },
];

for (const el of elements) {
  if (el.visible) console.log(el.id);
}

for (const el of elements) {
  if (el.visible === false) console.log(el.id);
}
