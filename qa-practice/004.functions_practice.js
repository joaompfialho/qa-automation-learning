function runTest(testName) {
  console.log(`Starting test: ${testName}`);
  console.log(`Test complete: ${testName}`);
}

function compareValues(expect, actual) {
  if (expect === actual) {
    console.log(`Test passed: expected ${expect} and got ${actual}`);
  } else {
    console.log(`Test failed: expected ${expect} but got ${actual}`);
  }
}

runTest("TC01");
compareValues(5, 5);

runTest("TC02");
compareValues(5, 3);

runTest("TC03");
compareValues(5, 6);
