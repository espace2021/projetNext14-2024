const CATEGORIE_API="/categories/"

export const fetchCategories=async()=> {
    const res = await fetch(process.env.API_URL+CATEGORIE_API, { cache: 'no-store' })
    const response = await res.json()
    return response;
    }

export const fetchCategorieById=async(categorieId)=> {
    const res = await fetch(process.env.API_URL+CATEGORIE_API+`${categorieId}`,{
        method: 'GET'
    });
    const response = await res.json();
    return response 

}

export const deleteCategorie=async(categorieId) =>{
    const res = await fetch(process.env.API_URL+CATEGORIE_API+`${categorieId}`,{
        method: 'DELETE'
    });
    const response = await res.json();
    return response;
}

export const addCategorie=async(categorie)=> { 
    const res = await fetch(process.env.API_URL+CATEGORIE_API, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(categorie),
    });
    const response = await res.json();
    return response;
}

export const editCategorie=async(categorie) =>{
    const res = await fetch(process.env.API_URL+CATEGORIE_API+`${categorie._id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(categorie),
    });
    const response = await res.json();
    return response;
}
