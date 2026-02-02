// always make the hooks file in .js extension because most of the time they return js not jsx
import { useEffect , useState } from "react";

// we are gonna use this API for 

function useCurrencyInfo(currency){

    // we will use useEffect so that whenever this function is called then due to useEffect API will automatically be called otherwise we will have to make another function to call API

    const[data,setData]=useState({}) // empty for default case so that website doesn't crash

    useEffect(()=>{
        if (!currency) {
            setData({})
            return
        }

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=>response.json()) // we get a response of API then we convert it into json format
        .then((response)=>setData(response?.[currency] ?? {})) // store only the conversion map for the selected base currency
        .catch((error) => {
            console.error("Currency API fetch failed:", error)
            setData({})
        })
    },[currency]) // whenever we change currency then we again need to call this function
    
    console.log(data)
    return data
}

export default useCurrencyInfo