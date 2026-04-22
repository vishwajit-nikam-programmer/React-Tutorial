 //Custom hooks which returns pure javascript
// hooks are basically functions
//custom hooks can also use our built in functions

import {useEffect, useState} from "react"

function useCurrencyInfo(currency) //don't take optinal arguments
{
    //Used to hold the response data

    //The called through API call is in basically String Format 
    //We need to convert it in Json Formant
    const[data,setData] = useState({})
    //In useEffect first one is callback function and second one is dependency array
    // if any changes occured in dependency array then it will call callback function.
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((response)=>setData(response[currency]))
        //To check what is inside data
        console.log(data);
        
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;