/*
  Warnings:

  - The primary key for the `clientsOnTables` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tableId` on the `clientsOnTables` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `tableId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `tables` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `tables` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `tables` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tables` table. All the data in the column will be lost.
  - Added the required column `tableAccountId` to the `clientsOnTables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tableAccountId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalOrder` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Made the column `productId` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `clientId` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `price` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "clientsOnTables" DROP CONSTRAINT "clientsOnTables_tableId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_clientId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_productId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_tableId_fkey";

-- DropIndex
DROP INDEX "clientsOnTables_clientId_key";

-- DropIndex
DROP INDEX "tables_token_key";

-- AlterTable
ALTER TABLE "clientsOnTables" DROP CONSTRAINT "clientsOnTables_pkey",
DROP COLUMN "tableId",
ADD COLUMN     "tableAccountId" TEXT NOT NULL,
ADD CONSTRAINT "clientsOnTables_pkey" PRIMARY KEY ("tableAccountId", "clientId");

-- AlterTable
ALTER TABLE "ingredientsOnProducts" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "quantity",
DROP COLUMN "tableId",
ADD COLUMN     "productQuantity" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "tableAccountId" TEXT NOT NULL,
ADD COLUMN     "totalOrder" MONEY NOT NULL,
ALTER COLUMN "productId" SET NOT NULL,
ALTER COLUMN "clientId" SET NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "price",
ADD COLUMN     "price" MONEY NOT NULL;

-- AlterTable
ALTER TABLE "tables" DROP COLUMN "amount",
DROP COLUMN "createdAt",
DROP COLUMN "token",
DROP COLUMN "updatedAt",
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "tablesAccount" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "totalTableAccount" MONEY NOT NULL,
    "openAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),
    "tableId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "tablesAccount_id_key" ON "tablesAccount"("id");

-- AddForeignKey
ALTER TABLE "tablesAccount" ADD CONSTRAINT "tablesAccount_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientsOnTables" ADD CONSTRAINT "clientsOnTables_tableAccountId_fkey" FOREIGN KEY ("tableAccountId") REFERENCES "tablesAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_tableAccountId_fkey" FOREIGN KEY ("tableAccountId") REFERENCES "tablesAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
