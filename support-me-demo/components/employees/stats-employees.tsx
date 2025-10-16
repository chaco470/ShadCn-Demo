import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { BadgeAlertIcon, BadgeCheckIcon, CrownIcon, Laptop2Icon, User2Icon, UserCheck2Icon, UserX2Icon } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Avatar, AvatarFallback } from '../ui/avatar'
import Image from 'next/image'
import jijo from '@/public/images/jijo.png'
import WorkLocationTrends from './work-location-trends'
import {totalEmployees, presentEmployees} from '@/utils/dumies'

export default function StatsEmployees() {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
            <CardHeader className='pb-0'>
                <CardTitle className='text-base'>
                    Total Employees
                </CardTitle>
            </CardHeader>
            <CardContent className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <User2Icon className='text-3xl'/>
                <div className='text-5xl font-black'>{totalEmployees}</div>
              </div>
              <div>
                <Button size="sm" asChild>
                  <Link href="/dashboard/employees">View all</Link>
                </Button>
              </div>
            </CardContent>
        </Card>
        <Card>
          <CardHeader className='pb-0'>
            <CardTitle className='text-base'>
              Employees present 
            </CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2'>
              {presentEmployees >= 75 ? <UserCheck2Icon className='text-3xl'/> : <UserX2Icon/> }
              <div className='text-5xl font-black'>{presentEmployees}</div>
            </div>
          </CardContent>
          <CardFooter className={'text-xs ' + (presentEmployees >= 75 ? 'text-green-500 ': 'text-red-500 ') + 'flex gap-1'}>
            {presentEmployees >= 75 ? <BadgeCheckIcon/> : <BadgeAlertIcon/> }
            <span>{presentEmployees}% of employees are present</span>
          </CardFooter>
        </Card>
        <Card className='border-primary flex flex-col'>
          <CardHeader className='pb-0'>
            <CardTitle className='text-base'>
              Employee of the month
            </CardTitle>
          </CardHeader>
          <CardContent className='flex gap-2 items-center'>
            <Avatar>
              <Image src={jijo} alt='employee of the month'/>
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <span className='text-2xl'>Colin Murray</span>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            <CrownIcon className='text-primary'/>
            <span>Congratulations Colin!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className='my-10'>
          <CardHeader className='pb-0'>
            <CardTitle className='text-lg flex gap-2 items-center'>
              <Laptop2Icon className='text-primary'/>
              <span>Employee location trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent className='pl-0'>
            <WorkLocationTrends/>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
    </>
  )
}
