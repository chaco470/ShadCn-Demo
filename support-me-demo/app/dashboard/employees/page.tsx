import React from 'react'
import {employeesMockData} from '@/utils/dumies'
import { setTimeout } from 'timers/promises'
import Loading from './loading'

export default async function EmployeesPage() {
  await setTimeout(5000)
  return (
    <div>
        <h2>
            Hempleaos
        </h2>
    </div>
  )
}
