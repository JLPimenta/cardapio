/*
  Warnings:

  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_clientId_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_tableId_fkey";

-- DropTable
DROP TABLE "sessions";

-- CreateTable
CREATE TABLE "ingredients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "urlImage" TEXT
);

-- CreateTable
CREATE TABLE "ingredientsOnProducts" (
    "ingredientId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ingredientsOnProducts_pkey" PRIMARY KEY ("productId","ingredientId")
);

-- CreateTable
CREATE TABLE "clientsOnTables" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tableId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "clientsOnTables_pkey" PRIMARY KEY ("tableId","clientId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_id_key" ON "ingredients"("id");

-- CreateIndex
CREATE UNIQUE INDEX "clientsOnTables_clientId_key" ON "clientsOnTables"("clientId");

-- AddForeignKey
ALTER TABLE "ingredientsOnProducts" ADD CONSTRAINT "ingredientsOnProducts_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredientsOnProducts" ADD CONSTRAINT "ingredientsOnProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientsOnTables" ADD CONSTRAINT "clientsOnTables_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientsOnTables" ADD CONSTRAINT "clientsOnTables_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
