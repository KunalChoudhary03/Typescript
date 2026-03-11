import { useEffect,useState } from "react";

interface FetchState<T>{
    data:T | null;
    loading:boolean;
    error:Error | null;
}

export function useFetch<T>(url:string): FetchState<T>{
    const [state,setState] = useState<FetchState<T>>({
        data:null,
        loading:true,
        error: null
    });
    //useEffect to make fetch request when url changes
    useEffect(()=>{
        setState({data:null,loading:true,error:null})   
        fetch(url)
        .then(res=>{
            if(!res.ok){    
                throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
            }
            return res.json() as Promise<T>
        })
        .then(data=>{
            setState({data,loading:false,error:null})
        }   )
        .catch(error=>{
            setState({data:null,loading:false,error})
        })  
    },[url])
    return state;
}