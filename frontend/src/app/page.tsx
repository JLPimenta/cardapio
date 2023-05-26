import Image from 'next/image'

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 24,
      }}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 327,

          paddingTop: 24,
        }}
      >
        <Image
          src='ForkKnife.svg'
          alt='Logo App'
          width={37}
          height={37}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            width: 37,
            height: 37,

            borderRadius: 50,
            backgroundColor: '#FDBA74',
          }}
        >
          <span style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }}>
            01
          </span>
        </div>
      </header>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',

          position: 'fixed',
          bottom: 0,
        }}
      >
        <button
          style={{
            width: 327,
            height: 50,

            backgroundColor: '#FB923C',
            borderRadius: 6,
            fontSize: 18,
            color: '#fff',
          }}
        >
          itens no pedido
        </button>
      </div>

      <div
        style={{
          display: 'flex',

          flexDirection: 'column',

          justifyContent: 'center',
          alignItems: 'center',

          gap: 2,

          width: 327,
          height: 102,
          backgroundColor: '#FFEDD5',
          borderRadius: 8,
        }}
      >
        <span style={{ fontSize: 14 }}>Total dos meus pedidos</span>
        <span style={{ fontWeight: 'bold', fontSize: 32 }}>R$ 25,00</span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',

          width: 327,
          height: 100,

          gap: 13,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            width: 100,
            height: 100,

            border: '1px solid #D1D5DB',
            borderRadius: 6,
          }}
        >
          <span style={{ fontSize: 64 }}>🍔</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            width: 100,
            height: 100,

            border: '1px solid #D1D5DB',
            borderRadius: 6,
          }}
        >
          <span style={{ fontSize: 64 }}>🍻</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            width: 100,
            height: 100,

            border: '1px solid #D1D5DB',
            borderRadius: 6,
          }}
        >
          <span style={{ fontSize: 64 }}>🍦</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          width: 327,

          paddingBottom: 60,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

            gap: 8,

            border: '1px solid #dddedf',
            borderRadius: 6,

            padding: 12,
            paddingBottom: 12,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 'bold' }}>X-Tudo</span>
            <span style={{ fontSize: 12 }}>
              Pão, hambúrguer caseiro, queijo mussarela, bacon, Catupiry,
              salsicha, presunto, ovo, milho, batata palha, alface, tomate e
              nossa deliciosa maionese caseira.
            </span>
            <span style={{ fontSize: 14, fontWeight: 'bold' }}>R$ 15,00</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

              borderRadius: 6,
            }}
          >
            <Image
              src='/x-tudo.png'
              width={400}
              height={65}
              alt='x-tudo'
              quality={100}
              priority
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

            gap: 8,

            border: '1px solid #dddedf',
            borderRadius: 6,

            padding: 12,
            paddingBottom: 12,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 'bold' }}>X-Tudo</span>
            <span style={{ fontSize: 12 }}>
              Pão, hambúrguer caseiro, queijo mussarela, bacon, Catupiry,
              salsicha, presunto, ovo, milho, batata palha, alface, tomate e
              nossa deliciosa maionese caseira.
            </span>
            <span style={{ fontSize: 14, fontWeight: 'bold' }}>R$ 15,00</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

              borderRadius: 6,
            }}
          >
            <Image
              src='/x-tudo.png'
              width={400}
              height={65}
              alt='x-tudo'
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
