let getLength = function (message) {
  console.log(message.length);
};

console.log(
  "Reproducing undefined error by calling getLength() without arguments:",
);
try {
  getLength();
} catch (error) {
  console.error("Reproduced error:", error.message);
}

getLength = function (message) {
  if (message == null) {
    console.log("Guard: message is undefined or null");
    return;
  }

  console.log(message.length);
};

console.log("Calling getLength() with valid data:");
getLength("Hello from lab_undefined.js");
