import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      {
        name: 'Lanches',
        icon: '🍔',
        id: 'af7c1fe6-d669-414e-b066-e9733f0de7a8',
      },
      {
        name: 'Bebidas não Alcoolicas',
        icon: '🥤',
        id: 'c558a80a-f319-4c10-95d4-4282ef745b4b',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'X-Tudo',
        price: '15',
        urlImage:
          'https://www.receiteria.com.br/wp-content/uploads/receitas-de-x-tudo.jpg',
        categoryId: 'af7c1fe6-d669-414e-b066-e9733f0de7a8',
        description:
          'Pão, hambúrguer caseiro, queijo mussarela, bacon, Catupiry, salsicha, presunto, ovo, milho, batata palha, alface, tomate e nossa deliciosa maionese caseira.',
      },
      {
        name: 'X-Calabresa',
        price: '15',
        urlImage:
          'https://www.receiteria.com.br/wp-content/uploads/receitas-de-x-tudo.jpg',
        categoryId: 'af7c1fe6-d669-414e-b066-e9733f0de7a8',
        description:
          'Pão, hambúrguer caseiro,calabresa, bacon, Catupiry, salsicha, presunto, ovo, milho, batata palha, alface, tomate e nossa deliciosa maionese caseira.',
      },
      {
        name: 'Coca Cola 2 Litros',
        price: '12',
        urlImage:
          'https://soaresemcasa.com.br/storage/uploads/56XXW1ipbsn8jTLDZC6dyPPMYheKU9B0i3ibE27d.jpg',
        categoryId: 'c558a80a-f319-4c10-95d4-4282ef745b4b',
      },
      {
        name: 'Guaraná 2 Litros',
        price: '12',
        urlImage:
          'https://emporiokaminski.com.br/wp-content/uploads/2020/07/Refrigerante-Guarana%CC%81-Antarctica-2l.jpg',
        categoryId: 'c558a80a-f319-4c10-95d4-4282ef745b4b',
      },
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
