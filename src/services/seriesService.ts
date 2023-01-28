import seriesRepository from "../repository/seriesRepository.js";

async function getSeries() {
  const cars = await seriesRepository.getSeries();
  return cars;
}

async function getSerie(id: number) {
  const serie = await seriesRepository.getSerie(id);
  if (!serie) {
    return("Serie não encontrada.");
  }

  return serie;
}

async function addSerie(id: number, name: string, idPlatform: number, idGenre: number, status: string, note: string) {
  await seriesRepository.addSerie(id, name, idPlatform, idGenre, status, note);
}

async function deleteSerie(id: number) {
  await getSerie(id);
  await seriesRepository.deleteSerie(id);
}

const seriesService = {
  getSeries,
  addSerie,
  deleteSerie
}

export default seriesService;