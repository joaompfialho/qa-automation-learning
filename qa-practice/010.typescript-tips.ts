// Basic Type Annotations
let firstName: string = "João";
let age: number = 43;
let isActive: boolean = true;
let tools: string[] = ["Playwright", "Cypress"];

// Function with Type Annotations
function greet(name: string): string {
  return "Hello " + name;
}

console.log(greet(firstName)); // Output: Hello João

function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(52, 10)); // Output: 62

// void means the function returns nothing
function logMessage(msg: string): void {
  console.log(msg);
}

logMessage("This is a log message."); // Output: This is a log message.

// Interfaces - Desining a structure for objects
interface User {
  username: string;
  password: string;
  role?: string; // optional property
}
const testUserA: User = {
  username: "qa_tester",
  password: "secret123",
};

const testUserB: User = {
  username: "qa_tester",
  password: "secret123",
  role: "admin",
};
