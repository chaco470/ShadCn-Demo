import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'

export default function StatsEmployees() {
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
            <CardHeader>
                <CardTitle className='text-sm'>
                    Total Employees
                </CardTitle>
            </CardHeader>
        </Card>
        <Card>Card 2</Card>
        <Card className='border-primary'>Card 3</Card>
    </div>
  )
}
