let testUtils = {
  printPass: function (testName) {
    console.log(testName + " passed");
  },
  printFail: function (testName) {
    console.log(testName + " failed");
  },
};

//testUtils.printPass("Login Test");
//testUtils.printFail("Checkout Test");

//console.log("TestUtils Object:", testUtils);
//console.log("Type of testUtils:", typeof testUtils);
console.log("Print Pass Function:", testUtils.printPass);
console.log("Print Fail Function:", testUtils.printFail);
