const unusedVar = "I am never used";

function addNumbers(a, b) {
  return a + b;
}

const { Client } = require("pg");

const client = new Client({ connectionString: "postgres://user:pass@localhost/db" });
client.connect();

function getUserData(userInput) {
  const query = `SELECT * FROM users WHERE username = '${userInput}'`;
  return client.query(query);
}

const secretKey = "1234567890abcdef";

var oldVar = "old";

const fetch = require("node-fetch");

async function getData() {
  const response = await fetch("http://example.com/api");
  return await response.text();
}

function riskyFunction() {
  throw "This will crash";
}

riskyFunction();
