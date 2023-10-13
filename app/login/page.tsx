import PageTitle from "@/components/shared/pagetitle"
import Link from "next/link"


function LoginPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className='login w-[600px] bg-gray-200 '>
                <PageTitle title="boite de connexion" />
                <div className="form  ">
                    <form action="" className="p-8">
                        <div className="form-control flex  items-center flex-gap justify-around gap-8 mb-4">
                            <label htmlFor="username" className="uppercase w-[50%]">Nom d&apos;utilisateur</label>
                            <input type="text" id='username' placeholder="nom d'utilisateur" className="p-3 w-[50%]" />
                        </div>
                        <div className="form-control flex  items-center flex-gap justify-around gap-8">
                            <label htmlFor="password" className="uppercase w-[50%]">Mot de passe</label>
                            <input type="password" id='password' placeholder="mot de passe" className="p-3 w-[50%]" />
                        </div>
                    </form>
                </div>

            </div>
            <div className='flex justify-center items-center gap-8 flex-gap '>
                <div>
                    <Link href='/menu-principal'>
                        <span className='btn py-3 px-8 bg-primary font-semibold outline-none uppercase text-white rounded-md'>Se connecter</span>
                    </Link>
                </div>
                <div>

                    <Link href='/'>
                        <span className='btn py-3 px-8 bg-red-700 font-semibold outline-none uppercase text-white rounded-md'>Annuler</span>
                    </Link>
                </div>

                <div>
                    <Link href='/'>
                        <span className='btn py-3 px-8 bg-gray-300 font-semibold outline-none uppercase text-black rounded-md'>quitter</span>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default LoginPage