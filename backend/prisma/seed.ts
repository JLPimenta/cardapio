import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { name: 'Lanches' },
      { name: 'Bebidas Alcoolicas' },
      { name: 'Bebidas não Alcoolicas' },
      { name: 'Petiscos' },
      { name: 'Porções' },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
