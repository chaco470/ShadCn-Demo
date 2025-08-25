"use client"
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { Button } from './button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function LightDarkToggle({className}: {className?: string}) {
    const {setTheme, resolvedTheme} = useTheme();
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild className={className} onClick={()=>setTheme(resolvedTheme === 'light'? 'dark': 'light')}>
                <Button variant="outline">
                    <MoonIcon className='hidden dark:block'/>
                    <SunIcon className='block dark:hidden'/>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <span className='hidden dark:inline'>Enable light mode</span>
                <span className='inline dark:hidden'>Enable dark mode</span>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}
