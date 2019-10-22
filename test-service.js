"use strict";
const AWS = new require("aws-sdk");

const awsOptions = {
  region: "us-east-1"
};

// set the AWS options
AWS.config.update(awsOptions);

const docClient = new AWS.DynamoDB.DocumentClient();

exports.searchNotif = eventName => {
  return docClient
    .scan({
      TableName: "Notifications_Dev",
      FilterExpression: "isGlobal = :isGlobal and contains(id, :e)",
      ExpressionAttributeValues: {
        ":e": `:${eventName}:`,
        ":isGlobal": true
      }
    })
    .promise()
    .then(n => {
      return n;
    });
};
