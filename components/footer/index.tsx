'use client'
import { useMemo } from "react"

function Footer() {
    const year = useMemo(() => new Date().getFullYear(), [])
    return (
        <footer className="bg-black p-3 text-white">
            <p>&copy;<span>{year}</span> SCPT - Tous droits reservés</p>
        </footer>
    )
}

export default Footer