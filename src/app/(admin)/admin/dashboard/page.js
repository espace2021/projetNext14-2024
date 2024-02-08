import React from 'react'
import ValuesCards from "@/components/admin/dashboard/valuesCards"
import Analytics from '@/components/admin/dashboard/analytics'
import Chart from '@/components/admin/dashboard/chart'
import UsersTable from '@/components/admin/dashboard/usersTable'
import CardsAnalytics from '@/components/admin/dashboard/cardsAnalytics'

const page = () => {
  return (
  <div className="container">
    <CardsAnalytics/>
   <div> 
    ***************** version 2 : choisir CardsAnalytics ou version 2 **************
   </div> 
   <ValuesCards />
   <Analytics /> 
   <Chart />
   <UsersTable />
</div>
  )
}

export default page
