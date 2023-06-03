"use client";
import api from "@/service/api";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { Product } from "../shared/entities/Product";
import { Category } from "@/shared/entities/Category";
import Header from "@/components/Header";
import TotalMyOrders from "@/components/TotalMyOrders";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState<string>(undefined || String);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const router = useRouter();

  const handleLoadProductsByCategory = (categoryId: string) => {
    setCategoryId(categoryId);

    setLoadingProducts(true);

    api.get("/products", { params: { categoryId } }).then(({ data }) => {
      setProducts(data);

      setLoadingProducts(false);
    });
  };

  useEffect(() => {
    setLoading(true);

    const categories = api.get("/categories").then(({ data }) => {
      setCategories(data);
    });

    const products = api.get("/products").then(({ data }) => {
      setProducts(data);
    });

    Promise.all([categories, products]).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full flex-auto justify-center">
      <div className="ml-auto mr-auto flex max-w-4xl flex-col justify-center gap-8 p-6">
        <Header />

        <TotalMyOrders />

        {loading ? (
          <div className=" flex h-[25rem] flex-col items-center justify-center">
            <svg
              aria-hidden="true"
              className="mr-2 h-8 w-8 animate-spin fill-orange-600 text-gray-200 dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        ) : (
          <>
            <div className="flex flex-row items-center gap-3 p-3">
              {categories.map((item: any) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      handleLoadProductsByCategory(item.id);
                    }}
                    className={`flex h-24 w-24 items-center justify-center rounded-lg border border-solid border-gray-300 text-6xl ${
                      categoryId === item.id
                        ? "border-2 border-solid border-orange-400 bg-orange-100"
                        : undefined
                    } `}
                  >
                    {item.icon}
                  </button>
                </div>
              ))}
            </div>

            {loadingProducts ? (
              <div className="flex flex-col items-center justify-center gap-3">
                <svg
                  aria-hidden="true"
                  className="mr-2 h-8 w-8 animate-spin fill-orange-600 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />

                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-3 pb-10">
                  {products.map((item: Product) => (
                    <div
                      onClick={() => {
                        router.push(`product/${item.id}`);
                      }}
                      key={item.id}
                      className="flex cursor-pointer flex-row justify-between gap-2 rounded-lg border border-solid border-gray-300 p-3 "
                    >
                      <div className="flex flex-col gap-2">
                        <span className="text-sm font-bold">{item.name}</span>
                        <span className="text-left text-xs">
                          {item.description}
                        </span>
                        <span className="text-sm font-bold">
                          R$ {parseFloat(item.price).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Image
                          src={`${item.urlImage}`}
                          style={{
                            minWidth: 80,
                            height: 80,
                            borderRadius: 6,
                            objectFit: "fill",
                          }}
                          alt={`${item.description}`}
                          width={80}
                          height={80}
                          quality={100}
                          priority
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
      <div className="fixed bottom-1 flex w-full justify-center pl-6 pr-6">
        <button
          style={{ maxWidth: 848 }}
          className="h-12 w-full rounded-lg bg-orange-400 p-3 text-lg text-white"
        >
          Itens no pedido
        </button>
      </div>
    </div>
  );
}
