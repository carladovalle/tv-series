import prisma from "../config/database.js";

async function getSeries() {;
  return prisma.series.findMany();
}

async function addSerie(id: number, name: string, idPlatform: number, idGenre: number, status: string, note: string) {
  return prisma.series.create({
    data: ({id, name,
    idPlatform,
    idGenre,
    status,
    note})
  });
}

const seriesRepository = {
  getSeries,
  addSerie
}

export default seriesRepository;