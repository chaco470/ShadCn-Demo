import React from 'react'
import MenuTitle from './menu-title'
import MenuItems from './menu-items'
import { Avatar } from './ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import Link from 'next/link'
import { LightDarkToggle } from './ui/light-dark-toggle'
import { cn } from '@/lib/utils'

const items = [
    {
        link: "/dashboard",
        text: "My dashboard"
    },
    {
        link: "/dashboard/teams",
        text: "Teams"
    },
    {
        link: "/dashboard/employees",
        text: "Employees"
    },
    {
        link: "/dashboard/account",
        text: "Account"
    },
    {
        link: "/dashboard/settings",
        text: "Settings"
    }
]

export default function MainMenu({classname}: {classname?:string}) {
  return (
    <nav className={cn(`md:bg-muted overflow-auto p-4 flex flex-col`, classname)}>
        <header className='hidden md:block border-b dark:border-b-black border-b-zinc-500 pb-4'>
            <MenuTitle/>
        </header>
        <div className='py-4 grow'>
            {items.map((item, index) => (
                <MenuItems key={index} href={item.link}>
                    {item.text}
                </MenuItems>
            ))}
        </div>
        <footer className='flex gap-2 items-center'>
            <Avatar className='h-9 w-9 shrink-0'>
                <AvatarFallback className='bg-emerald-500 dark:bg-emerald-700'>
                    ML
                </AvatarFallback>
            </Avatar>
            <Link href="/" className='hover:underline'>Logout</Link>
            <LightDarkToggle className='ml-auto'/>
        </footer>
    </nav>
  )
}
