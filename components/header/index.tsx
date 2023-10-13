import Logo from "../logo"

function Header() {
    return (
        <header className="shadow-lg">
            <nav className="flex items-center justify-center gap-4 py-8 px-5">
                <div className="brand">
                    <Logo />
                </div>
                <div className="tagline text-left">
                    <h1 className="text-3xl uppercase font-bold  mb-4">
                        République Démocratique du Congo
                    </h1>
                    <p className="text-blue-500">
                        Société Commerciale des Postes et Transport
                    </p>
                </div>
            </nav>
        </header>
    )
}

export default Header