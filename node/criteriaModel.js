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

//Name for overlay
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

  //Get all template details; Categories, Sub-categories & Criterias - Needs to be tested
  const getTemplateDetails = async (templateName) => {
    
    if (!templateName) {
      throw new Error("Template name must be provided");
    }
    try {
      const templateResult = await pgClient.query("SELECT Template_Id, Template_Contents FROM Template WHERE TemplateName = $1", [templateName]);
      if (templateResult.rowCount === 0) {
        throw new Error("Template not found");
      }
      const template = templateResult.rows[0];

      //Parse and handle JSON contents
      let templateContents;
      try {
        templateContents = JSON.parse(template.Template_Contents).template_contents;
      } catch (jsonParseError) {
        throw new Error("Failed to parse Template_Contents JSON");
      }

      const critIds = templateContents.map(content => content.crit_id);
      const catIds = templateContents.map(content => content.cat_id);
      const subcatIds = templateContents.map(content => content.subcat_id);
      
      if (!critIds.length || !catIds.length || !subcatIds.length) {
        throw new Error("No criteria, categories, or subcategories found in the template");
      }

      //Request
      const detailsQuery = `
        SELECT
          CAT.Cat_Name,
          SC.Subcat_Name,
          C.Crit_name
        FROM Criteria C
        INNER JOIN Categories SC ON C.Subcat_Id = SC.Subcat
        INNER JOIN Categories CAT ON SC.Cat_Id = CAT.Cat_Id
        WHERE C.Cat_Id = ANY($1::int[]) AND SC.Subcat = ANY($2::int[]) AND CAT.Cat_Id = ANY($3::int[])
      `;
      
      const detailsResult = await pgClient.query(detailsQuery, [critIds, subcatIds, catIds]);
      if (detailsResult.rowCount === 0) {
        throw new Error("No criterias, categories, or subcategories found for the template");
      }
      return {
        templateId: template.TemplateId,
        details: detailsResult.rows,
      };

    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "Template name must be provided":
        case "Template not found":
        case "Failed to parse Template_Contents JSON":
        case "No criteria, categories, or subcategories found in the template":
        case "No detailed criteria, categories, or subcategories found for the template":
          throw error;
        default:
          throw new Error("Internal server error");
      }
    }
  };

  module.exports = {
    getCriteria,
    getTemplateName,
    getTemplateDetails

  };