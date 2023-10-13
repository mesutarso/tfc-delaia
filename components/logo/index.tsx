import Image from "next/image"

function Logo() {
    return (
        <div>
            <Image src="/logo-scpt.svg" alt="Vercel Logo" width={100} height={100} priority className="aspect-auto" />
        </div>
    )
}

export default Logo