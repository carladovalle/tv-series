import seriesRepository from "../repository/seriesRepository.js";

async function getSeries() {
  const cars = await seriesRepository.getSeries();
  return cars;
}

async function addSerie(id: number, name: string, idPlatform: number, idGenre: number, status: string, note: string) {
  await seriesRepository.addSerie(id, name, idPlatform, idGenre, status, note);
}

const seriesService = {
  getSeries,
  addSerie
}

export default seriesService;