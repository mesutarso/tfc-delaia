import PageTitle from "@/components/shared/pagetitle"
import Link from "next/link"


function MenuPrincipale() {
    return (
        <div className="flex flex-col gap-8">
            <div className='login w-[600px] bg-gray-200 '>
                <PageTitle title="menu principal" />
                <div className="grid grid-cols-2 gap-8 p-8  ">
                    <div>

                        <Link href='/demande'>
                            <span className='w-[100%] block py-3 px-8 bg-primary font-semibold outline-none uppercase text-white rounded-md'>demande de carte</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='/editions'>
                            <span className='w-[100%] block py-3 px-8 bg-primary font-semibold outline-none uppercase text-white rounded-md'>éditions diverses</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='/impression'>
                            <span className='w-[100%] block py-3 px-8 bg-primary font-semibold outline-none uppercase text-white rounded-md'>impréssion faf</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='/travaux'>
                            <span className='w-[100%] block py-3 px-8 bg-primary font-semibold outline-none uppercase text-white rounded-md'>Travaux techniques</span>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center gap-8 flex-gap '>

                <div>
                    <Link href='/'>
                        <span className='btn py-3 px-8 bg-gray-300 font-semibold outline-none uppercase text-black rounded-md'>quitter</span>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default MenuPrincipale