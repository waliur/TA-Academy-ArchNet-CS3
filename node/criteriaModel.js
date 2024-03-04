// const { pgClient } = require("./index");

const { pgHost, pgDatabase, pgUser, pgPassword, pgPort } = require("./config");
const { Pool } = require("pg");
const pgClient = new Pool({
  user: pgUser,
  host: pgHost,
  database: pgDatabase,
  password: pgPassword,
  port: pgPort
});

const getCriteria = async () => {
    try {
      return await new Promise(function (resolve, reject) {
        pgClient.query("SELECT * FROM criteria", (error, results) => {
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


//********************************************** New Assesment Flow  **********************************************************************

  const getTemplateName = async (templateName) => {
    try {
      const data = await pgClient.query("SELECT Template_Name FROM template WHERE template_name= $1 AND active = TRUE LIMIT 1", [templateName]);
      if(data.rowCount > 0) {
        return data.rows[0];
      } else {
        throw new Error("No results found for retrieving template")
      }
    } catch (error) {
      console.error(error);
      throw new Error("Internal server error")

    }
  }    


  module.exports = {
    getCriteria,
    getTemplateName,
  };