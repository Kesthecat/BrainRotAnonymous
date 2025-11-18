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
        <nav className="flex space-x-8 text-md font-medium justify-between">
            {
                links.map((link) => {
                    return <Link key={link.name} href={link.href} className={pathname === link.href ? 'opacity-100 font-semibold border-b-2 border-white pb-1' : 'opacity-90 hover:opacity-100 hover:animate-pulse'}>
                        {link.name}
                    </Link>
                })
            }
        </nav>
    )
}