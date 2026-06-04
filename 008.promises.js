// This version with async/await does the same as the original flow:
// fetch(...).then(response => response.json()).then(data => console.log(data)).catch(error => ...)
async function fetchUsers() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    console.log("Users:", data);
  } catch (error) {
    console.error("Failed:", error);
  }
}

fetchUsers();
