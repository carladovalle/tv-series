import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.series.createMany({
        data: [
            {
                "id": 1,
                "name": "the big bang  theory",
                "idPlatform": 1,
                "idGenre": 1,
                "status": "finished",
                "note": "i love"
            }
        ]
    })
}

main()
  .then(() => {
      console.log("Registro feito com sucesso.");
    })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });