import React from 'react'
import Link from 'next/link'

async function getData() {
    const res = await fetch('http://localhost:3001/api/categories')
     
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   

const CategoriesMenu = async() => {
    const data = await getData()
    
  return (
    
    <>
    {data && data.length>0 && data.map((category)=><div  key={category._id}> <Link href="/">{category.nomcategorie}</Link></div> )}
    </>
  
  )
}

export default CategoriesMenu
