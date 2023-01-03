import { sequelize, DataTypes } from "../database.js";

export const PackageModel = sequelize.define("package", {
  itinerary: DataTypes.STRING,
  description: DataTypes.TEXT,
  thumbnail: DataTypes.STRING,
  price: DataTypes.INTEGER,
  popularity: DataTypes.INTEGER,
  title: DataTypes.STRING,
});
