"use client";
import api from "@/service/api";
import {
  ChevronLeftIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { Product } from "../../../shared/entities/Product";

export default function Product() {
  const { productId } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<Product>();

  // if (product) {
  //   product.price = parseFloat(product.price.toString()).toFixed(2);
  // }

  useEffect(() => {
    api.get(`/products/${productId}`).then(({ data }) => {
      setProduct(data);
    });
  }, [productId]);

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
        <button
          onClick={() => {
            router.back();
          }}
        >
          <ChevronLeftIcon width={37} height={37} />
        </button>
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
          justifyContent: "space-between",
          alignItems: "flex-start",

          position: "fixed",
          bottom: 4,
          width: 350,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "center",
            alignItems: "center",

            height: 50,

            gap: 8,
          }}
        >
          <button>
            <MinusIcon className="h-6 w-6 text-gray-500" />
          </button>

          <span style={{ fontSize: 14, fontWeight: "bold" }}>1</span>

          <button>
            <PlusIcon className="h-6 w-6 text-orange-500" />
          </button>
        </div>
        <button
          style={{
            height: 50,
            width: 232,

            backgroundColor: "#FB923C",
            borderRadius: 6,
            fontSize: 18,
            color: "#fff",
          }}
        >
          Adicionar R$ {product?.price}
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: 350,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontWeight: "bold" }}>{product?.name}</span>
          <span>{product?.description ? product.description : "..."}</span>
          <span style={{ fontWeight: "bold" }}>R$ {product?.price}</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: 350,
        }}
      >
        <span style={{ fontWeight: "bold" }}>Observações</span>
        <input
          style={{
            borderRadius: 6,
            backgroundColor: "#fff",
            color: "#6B7280",
            height: 48,
            alignItems: "flex-start",
            paddingBottom: 12,
            paddingTop: 12,
            paddingRight: 16,
            paddingLeft: 16,

            outlineColor: "#FB923C",
          }}
          type="text"
          placeholder="Ex: Tirar a maionese, ponto da carne"
        />
      </div>
    </div>
  );
}
