const unusedVar = "I am never used";

function addNumbers(a, b) {
  return a + b;
}

import { Client } from "pg";

const client = new Client({ connectionString: "postgres://user:pass@localhost/db" });
client.connect();

function getUserData(userInput: string) {
  const query = `SELECT * FROM users WHERE username = '${userInput}'`;
  return client.query(query);
}

const secretKey = "1234567890abcdef";

var oldVar = "old";

import fetch from "node-fetch";

async function getData() {
  const response = await fetch("http://example.com/api");
  return await response.text();
}

function riskyFunction() {
  throw "This will crash";
}

riskyFunction();
