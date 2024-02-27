import React from 'react'
import ValuesCards from "@/components/admin/dashboard/valuesCards"
import Analytics from '@/components/admin/dashboard/analytics'
import Chart from '@/components/admin/dashboard/chart'
import UsersTable from '@/components/admin/dashboard/usersTable'
import CardsAnalytics from '@/components/admin/dashboard/cardsAnalytics'

async function getUsers() {
  //https://apigenerator.dronahq.com/api/g6I0f1KJ/users
    const res = await fetch('http://localhost:3001/api/users')
     
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
   
    return await res.json()
  }

const page = async () => {
  const users= await getUsers();
  console.log(users)
  return (
  <div className="container">
    <CardsAnalytics users={users} />

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
