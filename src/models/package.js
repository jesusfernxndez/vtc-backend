import { sequelize, DataTypes } from "../database.js";

export const PackageModel = sequelize.define("package", {
  itinerary: DataTypes.STRING,
  description: DataTypes.STRING,
  thumbnail: DataTypes.STRING,
  price: DataTypes.INTEGER,
  popularity: DataTypes.INTEGER,
});
