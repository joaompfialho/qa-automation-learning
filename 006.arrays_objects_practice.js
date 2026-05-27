let testCases = [
  "Register",
  "Login",
  "Unsubscribe",
  "Logout",
  "Reset Password",
];

for (let testCase of testCases) {
  console.log("Executing ", testCase);
}

let users = {
  username: "John Doe",
  password: "password123",
  email: "john.doe@example.com",
};

console.log("\nObject keys: ", Object.keys(users));

let usersList = [
  {
    username: "John Doe",
    password: "password123",
    email: "john.doe@example.com",
  },
  {
    username: "Jane Smith",
    password: "password456",
    email: "jane.smith@example.com",
  },
  {
    username: "Bob Johnson",
    password: "password789",
    email: "bob.johnson@example.com",
  },
];
