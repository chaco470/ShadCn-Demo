'use client'
import React from 'react'
import {ResponsiveContainer, Tooltip, PieChart, Pie, Cell} from 'recharts'
import {pieChartData} from '@/utils/dumies'

export default function DistributionTeamsChart() {
  return (
    <ResponsiveContainer width="100%" height={150}>
        <PieChart width={730} height={250}>
            <Tooltip
                labelClassName='!font-bold'
                wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white !text-sm dark:!bg-black rounded-md dark:!border-border"/>
            <Pie data={pieChartData} dataKey="value" nameKey="name">
                {pieChartData.map((data, i)=>(
                    <Cell key={i} fill={data.color}/>
                ))}
            </Pie>
        </PieChart>
    </ResponsiveContainer>
  )
}
