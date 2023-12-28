'use server'
import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

async function getData() {
    const res = await fetch('http://localhost:3001/api/categories')
     
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   


const CategoriesMenu = async() => {
    const data = await getData()
    console.log(data)

    const title= <DynamicFeedIcon />

  return (
    <NavDropdown title={title} >
    {data && data.length > 0 && data.map((category) =><NavDropdown.Item key={category._id}> {category.nomcategorie} </NavDropdown.Item>)}
    
    </NavDropdown>
  )
}

export default CategoriesMenu
