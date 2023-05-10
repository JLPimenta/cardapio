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
    skipDuplicates: true,
  });

  await prisma.ingredient.createMany({
    data: [
      { name: 'Ovo' },
      { name: 'Pão' },
      { name: 'Cheddar' },
      { name: 'Hamburguer' },
    ],
    skipDuplicates: true,
  });

  await prisma.table.createMany({
    data: [{ number: '1' }, { number: '2' }, { number: '3' }, { number: '4' }],
    skipDuplicates: true,
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
