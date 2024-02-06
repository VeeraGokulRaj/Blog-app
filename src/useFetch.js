import { useState, useEffect } from "react";

const useFetch = (url) =>{
    // console.log("Fetching data from:", url);
    //setting Blogs as NUll Because getting data from local REST API
    const [data,setData]=useState(null); 

    // Setting Loding state
    const[isLoading,setIsLoading]=useState(true);

    //Setting Error State
    const[error,setError] = useState(null);

    // Fetching data from API
    useEffect(()=>{
        const abortCont = new AbortController(); //aborting the Fetch when the component not in use

            setTimeout(()=>{
                fetch(url,{signal : abortCont.signal})
                    .then((res)=>{
                        if(!res.ok){
                            throw Error("Could not able to fetch data from the resource")
                        }
                    return res.json();
                })
                .then((data)=>{
                    setIsLoading(false);
                    setData(data)
                })
                .catch((err)=>{             //Catch the network error (Ex:end url was not connevted with API)
                    if(err.name === "AbortError")
                        console.log("Fetch Aborted");

                    setIsLoading(false);
                    setError(err.message);
                })
            },1000);
            return () => abortCont.abort();     //CleanUp Function
        }
    ,[url])
    return {data,isLoading,error};
}
export default useFetch;