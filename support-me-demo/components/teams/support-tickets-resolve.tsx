'use client'
import React from 'react'
import {lineData} from '@/utils/dumies'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function SupportTicketResolve() {
  return (
    <ResponsiveContainer width="100%" height={350}>
        <LineChart data={lineData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" fontSize={12} stroke='#888'/>
            <YAxis fontSize={12} stroke='#888'/>
            <Tooltip 
                labelClassName='!font-bold'
                wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"/>
            <Legend formatter={(value)=>(<span className='capitalize font-bold'>{value}</span>)}/>
            <Line type="monotone" dataKey="alpha" stroke="#8884d8" />
            <Line type="monotone" dataKey="delta" stroke="#82ca9d" />
            <Line type="monotone" dataKey="canary" stroke="#d12d21" />
        </LineChart>
    </ResponsiveContainer>
  )
}
