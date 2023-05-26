import Image from 'next/image'

export default function Product() {
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
        <button>
          <Image
            src='ChevronLeft.svg'
            alt='Logo App'
            width={37}
            height={37}
            color='#fff'
          />
        </button>
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
          justifyContent: 'space-between',
          alignItems: 'flex-start',

          position: 'fixed',
          bottom: 0,
          width: 327,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',

            justifyContent: 'center',
            alignItems: 'center',

            height: 50,

            gap: 8,
          }}
        >
          <button>
            <Image
              src='/Minus.svg'
              width={25}
              height={24}
              alt='Diminuir quantidade'
            />
          </button>

          <span style={{ fontSize: 16, fontWeight: 'bold' }}>1</span>

          <button>
            <Image
              src='/Plus.svg'
              width={25}
              height={24}
              alt='Diminuir quantidade'
            />
          </button>
        </div>
        <button
          style={{
            height: 50,
            width: 232,

            backgroundColor: '#FB923C',
            borderRadius: 6,
            fontSize: 18,
            color: '#fff',
          }}
        >
          Adicionar R$ 15,00
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
          flexDirection: 'column',
          gap: 12,
          width: 327,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontWeight: 'bold' }}>X-Tudo</span>
          <span>
            Pão, hambúrguer caseiro, queijo mussarela, bacon, Catupiry,
            salsicha, presunto, ovo, milho, batata palha, alface, tomate e nossa
            deliciosa maionese caseira.
          </span>
          <span style={{ fontWeight: 'bold' }}>R$ 15,00</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          width: 327,
        }}
      >
        <span style={{ fontWeight: 'bold' }}>Observações</span>
        <input
          style={{
            borderRadius: 6,
            backgroundColor: '#fff',
            color: '#6B7280',
            height: 48,
            alignItems: 'flex-start',
            paddingBottom: 12,
            paddingTop: 12,
            paddingRight: 16,
            paddingLeft: 16,

            outlineColor: '#FB923C',
          }}
          type='text'
          placeholder='Ex: Tirar a maionese, ponto da carne'
        />
      </div>
    </div>
  )
}
