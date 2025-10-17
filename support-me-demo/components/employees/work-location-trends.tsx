'use client';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import {workLocationsData} from '@/utils/dumies'

export default function WorkLocationTrends() {

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={workLocationsData} className='[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800'>
        <XAxis dataKey="name" stroke="#888" fontSize={12}/>
        <YAxis stroke="#888" fontSize={12}/>
        <Legend iconType='circle' 
                formatter={(value)=>{if(value==="office"){
                  return <div className='text-sm'>Work from office</div>} 
                { return <div className='text-sm'>Work from home</div>}}}/>
        <Tooltip separator=': '
                  labelClassName='!font-bold'
                  wrapperClassName="!text-sm dark:!bg-white rounded-md dark:!border-border"
                  formatter={(value, name)=>{
                    if(name==="wfh"){
                      return [value, "Work at Home"]
                    }else{
                      return [value, "Work at Office"]
                    }
                  }}/>
        <Bar dataKey="office" stackId={1} fill="#009689" />
        <Bar dataKey="wfh" stackId={1} fill="#9f9fa9" radius={[4,4,0,0]}/>
      </BarChart>
    </ResponsiveContainer>
  )
}
