module.exports = {
  HOST: "localhost",
  USER: "Sunil",
  PASSWORD: "root",
  DB: "Demo",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
