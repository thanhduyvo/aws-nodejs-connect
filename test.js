"use strict";
const testService = require("./test-service");

try {
  testService
    .searchNotif("failed_transaction")
    .then(async n => {
      if (n.Count > 0) {
        console.log(n.Items);
      }
    })
    .catch(err => {
      console.log(err);
    });
} catch (ex) {
  console.log("Error during testing...");
}
