import { Router } from "express";
import seriesController from "../controllers/seriesController.js";

const carsRouter = Router();

carsRouter.get("/series", seriesController.getAllSeries);
carsRouter.post("/series", seriesController.addSerie);
carsRouter.delete("/series/:serieId", seriesController.deleteSerie);
carsRouter.put("/series/:serieId", seriesController.updateSerie);

export default carsRouter;