import { useState, useEffect } from 'react'

// useMoney=(currency)=>{
//     const [data,setData] =useState({});
//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
//         .then((res)=>res.json())
//         .then((res)=> setData(res[currency]))
//     },[currency])
//     console.dir(data)
//     return data
// }
// import { useState, useEffect } from 'react';

export const useMoney = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]));
    }, [currency]);

    return data;
};


// export default useMoney