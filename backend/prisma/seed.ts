import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { name: 'Lanches', icon: '🍔' },
      { name: 'Bebidas Alcoolicas', icon: '🍻' },
      { name: 'Bebidas não Alcoolicas', icon: '🥤' },
      { name: 'Porções', icon: '🍢' },
      { name: 'Pratos', icon: '🥘' },
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
