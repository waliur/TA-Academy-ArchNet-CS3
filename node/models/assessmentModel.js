// const { pgClient } = require("./index");

const { pgHost, pgDatabase, pgUser, pgPassword, pgPort } = require("../config");
const { Pool } = require("pg");
const pgClient = new Pool({
  user: pgUser,
  host: pgHost,
  database: pgDatabase,
  password: pgPassword,
  port: pgPort
});

const getAssessment = async () => {
    try {
      return await new Promise(function (resolve, reject) {
        pgClient.query("SELECT * FROM assessment", (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(results.rows);
          } else {
            reject(new Error("No results found"));
          }
        });
      });
    } catch (error_1) {
      console.error(error_1);
      throw new Error("Internal server error");
    }
  };

  module.exports = {
    getAssessment
  };