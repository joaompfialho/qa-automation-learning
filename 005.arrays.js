let testCases = ["Register", "Login", "Unsubscribe"];

printTestCases(testCases);
testCases.push("Logout");
printTestCases(testCases);

function printTestCases(testCases) {
  console.log(`\n'${testCases.length}' test cases will be printed`);
  for (test of testCases) {
    console.log("Test name: ", test);
  }
}

let userRole = { username: "john_doe", role: "admin" };
console.log("\nUser role ");
console.log("Username: ", userRole.username);
console.log("Role: ", userRole["role"]);

let paymentMethods = ["Credit Card", "Revolut", "Cripto"];
for (let method of paymentMethods) {
  console.log("Testing checkout with " + method);
}

let players = [
  { playerName: "Alice", score: 100 },
  { playerName: "Bob", score: 150 },
];

console.log(Object.keys(players[0]));
console.log(Object.values(players[0]));
console.log(Object.entries(players[0]));
