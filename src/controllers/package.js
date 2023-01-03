import { Op } from "sequelize";
import { PackageModel } from "../models/package.js";

export const getPackages = async (req, res) => {
  const packages = await PackageModel.findAll();
  res.send(packages);
};

export const getPackagesMostPopularity = async (req, res) => {
  const packages = await PackageModel.findAll({
    where: {
      popularity: {
        [Op.gt]: 3,
      },
    },
  });
  res.send(packages);
};

export const getPackagesMostEconomic = async (req, res) => {
  const packages = await PackageModel.findAll({
    where: {
      price: {
        [Op.lt]: 500,
      },
    },
  });
  res.send(packages);
};
