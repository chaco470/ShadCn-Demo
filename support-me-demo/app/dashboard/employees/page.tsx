import React from 'react'
import {employeesMockData} from '@/utils/dumies'
import { setTimeout } from 'timers/promises'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DataTable } from '@/components/data-table'
import { columns } from './columns'

export default async function EmployeesPage() {
  await setTimeout(2000)
  //<>
  return (
    <div>
        <Card>
          <CardHeader>
            <CardTitle>
              Employees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable data={employeesMockData} columns={columns}/>
          </CardContent>
        </Card>
    </div>
  )
}
