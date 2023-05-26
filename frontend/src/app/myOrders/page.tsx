import {
  CheckCircleIcon,
  ChevronLeftIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/solid'

export default function Order() {
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
          <ChevronLeftIcon
            width={37}
            height={37}
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
        <span style={{ fontSize: 14 }}>
          Clique para visualizar o total da mesa
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          width: 327,
        }}
      >
        <span style={{ fontWeight: 'bold' }}>Pedidos</span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          width: 327,

          paddingBottom: 60,
        }}
      >
        <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
          <p style={{ fontWeight: 'bold', fontSize: 16 }}>12/08/2022</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',

              gap: 8,

              border: '1px solid #dddedf',
              borderRadius: 6,

              padding: 12,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                borderRadius: 6,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 'bold' }}>08:30</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  1x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  X-Tudo
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  1x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  Guaraná Antártica 2 Litros
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  2x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  Skol Lata
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',

                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button>
                <EllipsisHorizontalCircleIcon className='w-5 h-5 text-orange-500' />
              </button>
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
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                borderRadius: 6,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 'bold' }}>08:30</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  1x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  X-Tudo
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  1x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  Guaraná Antártica 2 Litros
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  2x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  Skol Lata
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',

                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button>
                <CheckCircleIcon className='w-5 h-5 text-green-500' />
              </button>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
          <p style={{ fontWeight: 'bold', fontSize: 16 }}>11/08/2022</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',

              gap: 8,

              border: '1px solid #dddedf',
              borderRadius: 6,

              padding: 12,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                borderRadius: 6,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 'bold' }}>08:30</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  1x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  X-Tudo
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  1x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  Guaraná Antártica 2 Litros
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  2x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  Skol Lata
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',

                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button>
                <CheckCircleIcon className='w-5 h-5 text-green-500' />
              </button>
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
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                borderRadius: 6,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 'bold' }}>08:30</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  1x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  X-Tudo
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  1x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  Guaraná Antártica 2 Litros
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#9CA3AF',
                  }}
                >
                  2x
                </span>

                <span style={{ fontSize: 14, fontWeight: 'normal' }}>
                  Skol Lata
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',

                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button>
                <CheckCircleIcon className='w-5 h-5 text-green-500' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
