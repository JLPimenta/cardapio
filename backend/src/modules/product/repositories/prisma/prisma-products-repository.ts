import {
  ProductsRepository,
  ingredientsOnProducts,
} from '../products-repository';
import { Prisma, PrismaClient, Product } from '@prisma/client';
import { CreateProductDto } from '../../dto/create-product-dto';
import { IngredientsParams } from '../../dto/ingredients-params';
import { ServiceUnavailableException } from '@nestjs/common';
import { UpdateProductDTO } from '../../dto/update-product-dto';
import { DeleteIngredientOnProductRequest } from '../../use-cases/delete-ingredient-from-a-product';

const prisma = new PrismaClient();

export class PrismaProductsRepository implements ProductsRepository {
  async deleteIngredient({
    ingredientId,
    productId,
  }: DeleteIngredientOnProductRequest) {
    await prisma.ingredientsOnProducts.delete({
      where: { productId_ingredientId: { ingredientId, productId } },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }

  async findAllIngredients(
    productId: string,
  ): Promise<ingredientsOnProducts[]> {
    const ingredients = await prisma
      .$queryRaw<ingredientsOnProducts[]>(
        Prisma.sql`select i.name, "ingredientsOnProducts".quantity,i."urlImage"
                  from ingredients i, products p, "ingredientsOnProducts"
                  where p.id = ${productId}
                  and p.id = "ingredientsOnProducts"."productId"
                  and i.id = "ingredientsOnProducts"."ingredientId"
		`,
      )
      .catch((e) => {
        throw new ServiceUnavailableException(e, {
          cause: new Error(),
          description: e.message,
        });
      });

    return ingredients;
  }

  async findByName(name: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { name },
    });

    return product;
  }

  async findOneById(id: string) {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        Category: { select: { name: true } },
      },
    });

    return product;
  }

  async findAll(
    name: string,
    isActive: string | undefined,
    categoryId: string,
  ) {
    const isActiveBool = isActive
      ? isActive.toLowerCase() === 'true'
      : undefined;

    const product = await prisma.product.findMany({
      where: {
        name: name ? { contains: name } : undefined,
        categoryId: categoryId ? categoryId : undefined,
        isActive: isActiveBool,
      },
      orderBy: { name: 'asc' },
    });

    return product;
  }

  async create({
    ingredients,
    ...productProps
  }: CreateProductDto): Promise<Product> {
    const newProduct = await prisma.product.create({
      data: {
        ...productProps,
      },
    });

    if (newProduct && ingredients?.length) {
      await prisma.ingredientsOnProducts.createMany({
        data: ingredients.map((ingredient: IngredientsParams) => ({
          ingredientId: ingredient.ingredientId,
          productId: newProduct.id,
          quantity: ingredient.quantity,
        })),
      });
    }

    return newProduct;
  }

  async update(
    id: string,
    { ingredients, ...data }: UpdateProductDTO,
  ): Promise<Product> {
    const productUpdated = await prisma.product.update({ where: { id }, data });

    if (ingredients) {
      for (const ingredient of ingredients) {
        const ingredientOnProducts =
          await prisma.ingredientsOnProducts.findUnique({
            where: {
              productId_ingredientId: {
                ingredientId: ingredient.ingredientId,
                productId: productUpdated.id,
              },
            },
          });

        if (ingredientOnProducts) {
          await prisma.ingredientsOnProducts.update({
            where: {
              productId_ingredientId: {
                ingredientId: ingredient.ingredientId,
                productId: productUpdated.id,
              },
            },
            data: { quantity: ingredient.quantity },
          });
        } else {
          await prisma.ingredientsOnProducts.create({
            data: {
              ingredientId: ingredient.ingredientId,
              quantity: ingredient.quantity ? ingredient.quantity : undefined,
              productId: productUpdated.id,
            },
          });
        }
      }
    }

    return productUpdated;
  }

  async changeAvailability(id: string): Promise<Product> {
    const { isActive } = await this.findOneById(id);

    const product: Product = await prisma.product.update({
      where: { id },
      data: { isActive: !isActive },
    });

    return product;
  }
}
