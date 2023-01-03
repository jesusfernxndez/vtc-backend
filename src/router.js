import { Router } from "express";
import {
  getPackagesMostPopularity,
  getPackagesMostEconomic,
} from "./controllers/package.js";

const router = Router();

router.get("/packages/most-popularity", getPackagesMostPopularity);
router.get("/packages/most-economic", getPackagesMostEconomic);

export default router;
