import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ChartPie, ListTodo, StarIcon, Users2 } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarFallback } from '../ui/avatar'
import {totalTeams, teamAvatars} from '@/utils/dumies'
import { Tooltip, TooltipContent, TooltipProvider } from '../ui/tooltip'
import { TooltipTrigger } from '@radix-ui/react-tooltip'
import DistributionTeamsChart from './distribution-teams-chart'
import SupportTicketResolve from './support-tickets-resolve'

export default function StatsTeams() {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
            <CardHeader className='pb-0'>
                <CardTitle className='text-base'>
                    Total teams
                </CardTitle>
            </CardHeader>
            <CardContent className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <Users2 className='text-3xl'/>
                <div className='text-5xl font-black'>{totalTeams}</div>
              </div>
              <div>
                <Button size="sm" asChild>
                  <Link href="/dashboard/teams">View all</Link>
                </Button>
              </div>
            </CardContent>
        </Card>
        <Card>
          <CardHeader className='pb-0'>
            <CardTitle className='text-base flex justify-between items-center'>
              <span>Team members</span>
              <StarIcon className='text-yellow-500'/>
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {teamAvatars.map(teamMember => (
                <TooltipProvider key={teamMember.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                        <Avatar>
                            {!!teamMember.avatar && 
                                <Image src={teamMember.avatar} alt={`${teamMember.firstName} ${teamMember.lastName}`}/>}
                            <AvatarFallback>{teamMember.firstName[0]} {teamMember.lastName[0]}</AvatarFallback>
                        </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                        {teamMember.firstName} {teamMember.lastName}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card className='flex flex-col pb-0'>
          <CardHeader className='pb-0'>
            <CardTitle className='text-base flex justify-between items-center'>
              <span>Team distribution</span>
              <ChartPie/>
            </CardTitle>
          </CardHeader>
          <CardContent className='!pb-0'>
            <DistributionTeamsChart/>
          </CardContent>
        </Card>
      </div>
      <Card className='my-10'>
          <CardHeader className='pb-0'>
            <CardTitle className='text-lg flex gap-2 items-center'>
              <ListTodo className='text-primary'/>
              <span>Support ticket resolved</span>
            </CardTitle>
          </CardHeader>
          <CardContent className='pl-0'>
            <SupportTicketResolve/>
          </CardContent>
        </Card>
    </>
  )
}
