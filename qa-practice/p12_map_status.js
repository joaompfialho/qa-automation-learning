const map = {
  PENDING: "Waiting",
  RUNNING: "In progress",
  PASSED: "Passed",
  FAILED: "Failed",
};

const code = "RUNNING";
console.log(map[code] || "Unknown");
console.log(map["RESOLVED"] || "Unknown");
