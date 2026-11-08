// Load environment variables from .env, if the dotenv package is installed.
// Otherwise, the code uses process.env.API_KEY directly.
try {
  require("dotenv").config();
} catch {
  // dotenv not installed - continue with process.env
}

const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error(
    "API_KEY not defined. Define API_KEY in the environment or create a .env file with the key.",
  );
}

async function fetchFirstUser() {
  try {
    const response = await fetch("https://reqres.in/api/users", {
      headers: {
        "x-api-key": apiKey,
        // If the API requires Authorization instead of x-api-key, change the line below:
        // "Authorization": `Bearer ${apiKey}`
      },
    });

    const data = await response.json();
    console.log("First user email:", data.data[0].email);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchFirstUser();
