import { Request, Response } from "express";
import seriesService from "../services/seriesService.js";

async function getAllSeries(req: Request, res: Response) {
  try {
    const series = await seriesService.getSeries();
    res.send(series);
  } catch (error) {
    return res.send(error.message);
  }
}

async function addSerie(req: Request, res: Response) {

  const { id, name, idPlatform, idGenre, status, note } = req.body;

  try {
    await seriesService.addSerie(id, name, idPlatform, idGenre, status, note)
    res.sendStatus(201);
  } catch (error) {
    return res.send(error.message);
    
}
}

async function deleteSerie(req: Request, res: Response) {

  const serieId = parseInt(req.params.serieId);

  try {
    await seriesService.deleteSerie(serieId)
    res.sendStatus(200);
  } catch (error) {
    return res.send(error.message);
}

}

const seriesController = {
  getAllSeries,
  addSerie,
  deleteSerie
}

export default seriesController;
