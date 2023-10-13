import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='home'>
      <h1 className='text-5xl uppercase text-blue-500 font-bold text-center mb-8'>Bienvenu(e) à gescartes</h1>
      <p className='text-2xl uppercase text-blue-500 font-bold text-center mb-8' >logiciel de demande des cartes</p>
      <div className='flex justify-center items-center gap-8 flex-gap'>

        <Link href='/login'>
          <span className='btn py-3 px-8 bg-primary font-semibold outline-none uppercase text-white rounded-md'>Se connecter</span>
        </Link>

        <Link href='#'>
          <span className='btn py-3 px-8 bg-red-700 font-semibold outline-none uppercase text-white rounded-md'>Annuler</span>
        </Link>

      </div>

    </section>
  )
}
