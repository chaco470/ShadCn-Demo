import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StatsEmployees from '@/components/employees/stats-employees'
import StatsTeams from '@/components/teams/stats-teams'

export default function DashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className='mb-4'>
        <TabsTrigger value="employees">Employees</TabsTrigger>
        <TabsTrigger value="teams">Teams</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <StatsEmployees/>
      </TabsContent>
      <TabsContent value="teams">
        <StatsTeams/>
      </TabsContent>  
    </Tabs>
  )
}