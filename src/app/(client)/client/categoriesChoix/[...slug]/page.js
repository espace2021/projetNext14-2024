import React from 'react'
import DetailCateg from '@/components/client/categoriesProducts/detailCateg';

async function getProducts(categorieID){

    const res= await fetch(`http://localhost:3001/api/articles/cat/${categorieID}`, { cache: 'no-store' })
    const scategories = await res.json();
    return scategories;
  }

const DetailCategPage = async({params}) => {
    const data = await getProducts(params.slug[0])
   
  return (
    <div>
      <h2>{decodeURI(params.slug[1])}</h2>
      <DetailCateg articles={data} />
    </div>
  )
}

export default DetailCategPage
