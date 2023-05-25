/*
  Warnings:

  - You are about to drop the column `productId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `productQuantity` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `ingredients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ingredientsOnProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "StatusOrder" AS ENUM ('Delivered', 'inProgress', 'Waiting');

-- DropForeignKey
ALTER TABLE "ingredientsOnProducts" DROP CONSTRAINT "ingredientsOnProducts_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "ingredientsOnProducts" DROP CONSTRAINT "ingredientsOnProducts_productId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_productId_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "productId",
DROP COLUMN "productQuantity",
ADD COLUMN     "status" "StatusOrder" NOT NULL DEFAULT 'Waiting';

-- DropTable
DROP TABLE "ingredients";

-- DropTable
DROP TABLE "ingredientsOnProducts";

-- CreateTable
CREATE TABLE "productsOnOrders" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER DEFAULT 1,
    "note" TEXT,
    "orderId" TEXT,
    "productId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "productsOnOrders_id_key" ON "productsOnOrders"("id");

-- AddForeignKey
ALTER TABLE "productsOnOrders" ADD CONSTRAINT "productsOnOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productsOnOrders" ADD CONSTRAINT "productsOnOrders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
