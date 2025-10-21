import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from "@/components/ui/skeleton"
import React from 'react'

export default function Loading() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>
                Employees
            </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-[60px_1fr_1fr_1fr_1fr] items-center gap-4">
            <Skeleton className='rounded-full size-10'/>
            <Skeleton className='rounded-md w-full h-2/3'/>
            <Skeleton className='rounded-md w-full h-2/3'/>
            <Skeleton className='rounded-md w-full h-2/3'/>
            <Skeleton className='rounded-md w-full h-2/3'/>
            <Skeleton className='rounded-full size-10'/>
            <Skeleton className='rounded-md w-full h-2/3'/>
            <Skeleton className='rounded-md w-full h-2/3'/>
            <Skeleton className='rounded-md w-full h-2/3'/>
            <Skeleton className='rounded-md w-full h-2/3'/>
        </CardContent>
    </Card>
  )
}
