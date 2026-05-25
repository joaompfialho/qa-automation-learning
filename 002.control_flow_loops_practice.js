let testNames = ["TC01", "TC02", "TC03", "TC04", "TC05"];

// For Loop
for (let name of testNames) {
  let statusIndex = Math.floor(Math.random() * 3);
  console.log(`Current status index: ${statusIndex}`);
  let status =
    statusIndex === 0 ? "passed" : statusIndex === 1 ? "failed" : "skipped";

  switch (status) {
    case "passed":
      console.log(`${name}: passed`);
      break;
    case "failed":
      console.log(`${name}: failed`);
      break;
    case "skipped":
      console.log(`${name}: skipped`);
      break;
    default:
      console.log(`${name}: unknown status`);
  }
}
