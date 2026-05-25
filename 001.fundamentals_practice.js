//variables declarations
let name = "João";
let age = 43;
let learningAutomation = true;
let favouriteAutomationTools = ["Selenium", "Cypress", "Playwright"];
let credentials = {
  username: "joao_tester",
  password: "securePass123",
};

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Learning Automation: " + learningAutomation);
console.log(
  "Favourite Automation Tools: " + favouriteAutomationTools.join(", "),
);
console.log(
  "Credentials: Username - " +
    credentials.username +
    ", Password - " +
    credentials.password,
);

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

if (age >= 18 && learningAutomation) {
  console.log(name + " is an adult and is learning automation.");
} else if (age >= 18) {
  console.log(name + " is an adult but is not learning automation.");
} else if (learningAutomation) {
  console.log(name + " is a minor but is learning automation.");
} else {
  console.log(name + " is a minor and is not learning automation.");
}
