function isValidEmail(email) {
  if (typeof email !== "string") return false;
  const at = email.indexOf("@");
  console.log(at);
  const dot = email.lastIndexOf(".");
  console.log(dot);
  return at > 0 && dot > at + 1 && dot < email.length - 1;
}

console.log(isValidEmail("qa@test.com"));
