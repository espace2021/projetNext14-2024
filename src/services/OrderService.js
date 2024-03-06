const ORDER_API="/orders/"

export const addOrder=async(objectOrder)=> {
    const res = await fetch(process.env.API_URL+ORDER_API, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(objectOrder),
    });
    const response = await res.json();
    return response;
}