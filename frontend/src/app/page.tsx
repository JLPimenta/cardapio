import Image from 'next/image'

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 375,
        }}
      >
        <Image
          src='ForkKnife.svg'
          alt='Logo App'
          width={37}
          height={37}
          color='#fff'
        />
        <div
          style={{
            display: 'flex',
            width: 37,
            height: 37,
            borderRadius: 50,
            backgroundColor: '#FDBA74',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          01
        </div>
      </header>
    </div>
  )
}
