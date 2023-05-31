"use client";
import api from "@/service/api";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { Product } from "../shared/entities/Product";
import { Category } from "@/shared/entities/Category";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<string>(undefined || String);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const router = useRouter();

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 350,

          paddingTop: 24,
        }}
      >
        <Image src="ForkKnife.svg" alt="Logo App" width={37} height={37} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: 37,
            height: 37,

            borderRadius: 50,
            backgroundColor: "#FDBA74",
          }}
        >
          <span style={{ fontWeight: "bold", color: "#fff", fontSize: 20 }}>
            01
          </span>
        </div>
      </header>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",

          position: "fixed",
          bottom: 4,
        }}
      >
        <button
          style={{
            width: 350,
            height: 50,

            backgroundColor: "#FB923C",
            borderRadius: 6,
            fontSize: 18,
            color: "#fff",
          }}
        >
          itens no pedido
        </button>
      </div>

      <div
        style={{
          display: "flex",

          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",

          gap: 2,

          width: 350,
          height: 102,
          backgroundColor: "#FFEDD5",
          borderRadius: 8,
        }}
      >
        <span style={{ fontSize: 14 }}>Total dos meus pedidos</span>
        <span style={{ fontWeight: "bold", fontSize: 32 }}>R$ 25,00</span>
      </div>

      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            width: 350,
            height: 400,
          }}
        >
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              width: 350,
              height: 100,

              gap: 13,
            }}
          >
            {categories.map((item: any) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    setCategory(item.id);

                    setLoadingProducts(true);

                    api
                      .get("/products", { params: { categoryId: item.id } })
                      .then(({ data }) => {
                        setProducts(data);

                        setLoadingProducts(false);
                      });
                  }}
                  className={`flex h-24 w-24 items-center justify-center rounded-md border border-solid border-gray-300 ${
                    category === item.id
                      ? "bg-orange-100 outline outline-orange-400"
                      : undefined
                  } `}
                  style={{ fontSize: 64 }}
                >
                  {item.icon}
                </button>
              </div>
            ))}
          </div>

          {loadingProducts ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                gap: 12,
                width: 350,

                paddingBottom: 60,
              }}
            >
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  width: 350,

                  paddingBottom: 60,
                }}
              >
                {products.map((item: Product) => (
                  <div
                    onClick={() => {
                      router.push(`product/${item.id}`);
                    }}
                    key={item.id}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",

                      gap: 8,

                      border: "1px solid #dddedf",
                      borderRadius: 6,

                      padding: 12,
                      paddingBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",

                        gap: 8,
                      }}
                    >
                      <span style={{ fontSize: 14, fontWeight: "bold" }}>
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          textAlign: "left",
                        }}
                      >
                        {item.description}
                      </span>
                      <span style={{ fontSize: 14, fontWeight: "bold" }}>
                        R$ {item.price}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
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
  );
}
