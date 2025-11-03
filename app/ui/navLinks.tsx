"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

interface Link {
    name: string;
    href: string
}

const links: Link[] = [
    {
        name: 'What to Cook',
        href: '/recipe'
    },
    {
        name: 'What to Wear',
        href: '/wear'
    },
    {
        name: 'What to Write',
        href: '/writing'
    },
    {
        name: 'What to Clean',
        href: '/cleaning'
    },
    {
        name: 'Leader board',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    }
]

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {
                links.map((link) => {
                    return <Link key={link.name} href={link.href} className={pathname === link.href ? 'font-bold text-pink-300' : 'text-white hover:font-bold'}>
                        {link.name}
                    </Link>
                })
            }
        </>
    )
}