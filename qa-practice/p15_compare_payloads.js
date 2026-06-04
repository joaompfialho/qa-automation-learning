function shallowEqual(a, b) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  for (const k of aKeys) {
    if (a[k] !== b[k]) return false;
  }
  return true;
}

console.log(shallowEqual({ id: 1, name: "A" }, { id: 1, name: "A" }));
console.log(shallowEqual({ id: 1, name: "A" }, { id: 1, name: "B" }));
console.log(shallowEqual({ id: 2, name: "A" }, { id: 1, name: "A" }));
console.log(
  shallowEqual({ id: 1, name: "A" }, { id: 1, name: "A", extra: true }),
);
