"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react'
import { DrawerContext } from './ui/drawer';

type Props ={
    children: React.ReactNode,
    href: string;
}

export default function MenuItems({children, href}:Props) {
    const pathname = usePathname()
    const isActive = pathname == href
    //use el useContext para llamar a DrawerContext definido en el componente Drawer, 
    //para que al clicar en un link el componente Drawer se cerrase automaticamente
    const {onClose} = useContext(DrawerContext)
    return (
    <Link onClick={onClose} href={href} className={cn("block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground",
        isActive && "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground"
    )}>{children}</Link>
  )
}
