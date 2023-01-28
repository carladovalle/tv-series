import prisma from "../config/database.js";

async function getSeries() {;
  return prisma.series.findMany();
}

async function getSerie(id: number) {
  return prisma.series.findFirst({
    where: {id},
  });
}

async function addSerie(id: number, name: string, idPlatform: number, idGenre: number, status: string, note: string) {
  return prisma.series.create({
    data: ({id,name,
    idPlatform,
    idGenre,
    status,
    note})
  });
}

async function deleteSerie(id: number) {
  return prisma.series.delete({
    where: {id},
  });
}

const seriesRepository = {
  getSeries,
  addSerie,
  getSerie,
  deleteSerie
}

export default seriesRepository;