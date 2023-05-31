import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Order() {
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
        <button>
          <Image
            src="ChevronLeft.svg"
            alt="Logo App"
            width={37}
            height={37}
            color="#fff"
          />
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
          Fazer pedido R$ 15,00
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
        <span style={{ fontWeight: "bold" }}>Itens no pedido</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: 350,

          paddingBottom: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            gap: 8,

            border: "1px solid #dddedf",
            borderRadius: 6,

            padding: 12,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/x-tudo.png"
                style={{ minWidth: 60, height: 60, borderRadius: 6 }}
                alt="item.description"
                width={60}
                height={60}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 12, fontWeight: "normal" }}>X-Tudo</span>

              <span style={{ fontSize: 12, fontWeight: "normal" }}>
                R$ 15,00
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              alignItems: "center",

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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            gap: 8,

            border: "1px solid #dddedf",
            borderRadius: 6,

            padding: 12,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/x-tudo.png"
                style={{ minWidth: 60, height: 60, borderRadius: 6 }}
                alt="item.description"
                width={60}
                height={60}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 12, fontWeight: "normal" }}>X-Tudo</span>

              <span style={{ fontSize: 12, fontWeight: "normal" }}>
                R$ 15,00
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "center",
              alignItems: "center",

              gap: 8,
            }}
          >
            <button>
              <Image
                src="/Minus.svg"
                width={20}
                height={20}
                alt="Diminuir quantidade"
              />
            </button>

            <span style={{ fontSize: 14, fontWeight: "bold" }}>1</span>

            <button>
              <Image
                src="/Plus.svg"
                width={20}
                height={20}
                alt="Diminuir quantidade"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
