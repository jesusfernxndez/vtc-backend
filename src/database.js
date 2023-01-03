import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "password", {
  host: "192.168.0.82",
  dialect: "postgres",
});

try {
  sequelize.authenticate().then(async () => {
    await sequelize.sync();
    console.log("database connected.");
  });
} catch (error) {
  console.log(error);
}

export { Sequelize, DataTypes, sequelize };
