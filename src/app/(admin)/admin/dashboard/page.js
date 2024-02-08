import React from 'react'
import ValuesCards from "@/components/admin/dashboard/valuesCards"
import Analytics from '@/components/admin/dashboard/analytics'
import Chart from '@/components/admin/dashboard/chart'
import UsersTable from '@/components/admin/dashboard/usersTable'

const page = () => {
  return (
  <div className="container">
    <ValuesCards />
    <Analytics />
    <Chart />
    <UsersTable />
</div>
  )
}

export default page
