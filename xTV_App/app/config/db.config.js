module.exports = {
    HOST: "localhost",
    USER: "xtv_user",
    PASSWORD: "postgres",
    DB: "xTV_DB",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };