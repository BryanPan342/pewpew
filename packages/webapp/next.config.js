require('dotenv').config();

module.exports = {
  target: 'serverless',
  env: {
    SERVERS: process.env.SERVERS,
  },
}