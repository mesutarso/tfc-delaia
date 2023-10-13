import PageTitle from "@/components/shared/pagetitle"
import Link from "next/link"


function Editions() {
    return (
        <div className="flex flex-col gap-8">
            <div className='login w-[600px] bg-gray-200 '>
                <PageTitle title="éditions diverses" />
                <div className="grid grid-cols-1 gap-4 p-8  ">
                    <div>

                        <Link href='#'>
                            <span className='w-[100%] block py-3 px-8 bg-primary font-semibold outline-none uppercase text-white rounded-md text-sm'>LISTES DES AGENTS QUI ONT DEMANDÉ LA CARTE AYANT DROIT</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='#'>
                            <span className='w-[100%] block py-3 px-8 bg-primary font-semibold outline-none uppercase text-white rounded-md text-sm'>LISTE DES AYANTS DROITS ENREGISTRÉS</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='#'>
                            <span className='w-[100%] block py-3 px-8 bg-primary font-semibold outline-none uppercase text-white rounded-md text-sm'>LISTE NUMÉRIQUE DE PERSONNES PRISE EN CHARGE AYANT DROIT</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='#'>
                            <span className='w-[100%] block py-3 px-8 bg-primary font-semibold outline-none uppercase text-white rounded-md text-sm'>LISTE ALPHABETIQUE DES AYANTS DROITS NOUVELLEMENT ENREGISTRÉS</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='#'>
                            <span className='w-[100%] block py-3 px-8 bg-primary font-semibold outline-none uppercase text-white rounded-md text-sm'>ÉTAT STATISTIQUE DE LA PRISE EN CHARGE DES AYANTS DROITS MALADES</span>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center gap-8 flex-gap '>

                <div>
                    <Link href='/menu-principal'>
                        <span className='btn py-3 px-8 bg-gray-300 font-semibold outline-none uppercase text-black rounded-md'>quitter</span>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Editions