const dotenv = require('dotenv');
dotenv.config();

module.exports = {
//   endpoint: process.env.API_URL,
//   masterKey: process.env.API_KEY,
  port: process.env.PORT,

  pgUser: process.env.PGUSER,
  pgHost: process.env.PGHOST,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT
};