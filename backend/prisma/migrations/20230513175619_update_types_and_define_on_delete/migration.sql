/*
  Warnings:

  - You are about to alter the column `totalOrder` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(10,2)`.
  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(10,2)`.
  - You are about to alter the column `totalTableAccount` on the `tablesAccount` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(10,2)`.

*/
-- DropForeignKey
ALTER TABLE "ingredientsOnProducts" DROP CONSTRAINT "ingredientsOnProducts_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "ingredientsOnProducts" DROP CONSTRAINT "ingredientsOnProducts_productId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categoryId_fkey";

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "totalOrder" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "categoryId" DROP NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "tablesAccount" ALTER COLUMN "totalTableAccount" SET DATA TYPE DECIMAL(10,2);

-- AddForeignKey
ALTER TABLE "ingredientsOnProducts" ADD CONSTRAINT "ingredientsOnProducts_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredientsOnProducts" ADD CONSTRAINT "ingredientsOnProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
