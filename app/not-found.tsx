import PageTitle from "@/components/shared/pagetitle"
import Link from "next/link"


function MenuPrincipale() {
    return (
        <div className="flex flex-col gap-8">
            <div className='login w-[600px] bg-gray-200 '>
                <PageTitle title="interface non disponible" />
                <div className="grid gap-8 p-8  ">
                    <h1 className="text-3xl text-center">Interface en cours de construction !</h1>
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

export default MenuPrincipale