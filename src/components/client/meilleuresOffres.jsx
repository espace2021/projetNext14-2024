import React from 'react'
import Image from 'next/image'

const MeilleuresOffres = () => {
    const tabOffres = [
        {src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703774819/images/balai-flora-rose_a5kfdb.webp"},
        {src:  "https://res.cloudinary.com/iset-sfax/image/upload/v1703774828/images/pesePersonne_tnlpyk.webp"},
        {src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703774825/images/chariot6roues_pmsfuq.webp"},
        {src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703774813/images/balai2_bjpaek.webp"}
     ]
  return (
    <div className="container overflow-hidden">
       <h2>Les meilleures offres du moment</h2> 
    <div className="row gy-5">
      
        {tabOffres.map((tab, i) =>  <div className="col-3"> <div className="p-3 border bg-light" key={i}>
        <div className="card" key={i}>
             <Image src={tab.src} width={200} height={200} alt="offres"/>
        </div>
        </div>
        </div>
     )
}

</div>
</div>
  );
}
export default MeilleuresOffres
