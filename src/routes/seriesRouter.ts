import { Router } from "express";
import seriesController from "../controllers/seriesController.js";

const carsRouter = Router();

carsRouter.get("/series", seriesController.getAllSeries);
carsRouter.post("/series", seriesController.addSerie);

export default carsRouter;