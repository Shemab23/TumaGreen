import { readdirSync } from "fs";
import { join, basename as _basename } from "path";
import Sequelize from "sequelize";
import { env as _env } from "process";

const basename = _basename(__filename);
const env = _env.NODE_ENV || "development";
import configFile from "../config/config.json" assert { type: "json" };
const config = configFile[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(_env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Import all models
readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(join(__dirname, file)).default; // works with your default export
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
