const ARTICLE_API="/articles/"

export const fetchArticles=async()=> { 
const res = await fetch(process.env.API_URL+ARTICLE_API, { cache: 'no-store' })
const response=await res.json()
return response;
}

export const fetchArticleById=async(articleId)=> {
    const res = await fetch(process.env.API_URL+ARTICLE_API+`${articleId}`,{
        method: 'GET'
    });
    const response = await res.json();
    return response 
}

export const deleteArticle=async(articleId) =>{
    const res = await fetch(process.env.API_URL+ARTICLE_API+`${articleId}`,{
        method: 'DELETE'
    });
    const response = await res.json();
    return response;

}

export const addArticle=async(article)=> {
    const res = await fetch(process.env.API_URL+ARTICLE_API, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
    });
    const response = await res.json();
    return response;
}

export const editArticle=async(article) =>{
    const res = await fetch(process.env.API_URL+ARTICLE_API+`${article._id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
    });
    const response = await res.json();
    return response;
}

export const fetchArticlesPagination=async(page,limit)=> { 
    const res = await fetch(process.env.API_URL+ARTICLE_API+`pagination?page=${page}&limit=${limit}`, { cache: 'no-store' })
    const response=await res.json()
    return response;
    }
    
export const fetchArticlesPaginationFilter=async(page,limit,searchTerm)=> { 
        const res = await fetch(process.env.API_URL+ARTICLE_API+`paginationFilter?page=${page}&limit=${limit}&searchTerm=${searchTerm}`, { cache: 'no-store' })
        const response=await res.json()
        return response;
        }    