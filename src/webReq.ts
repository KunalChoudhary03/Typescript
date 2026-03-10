// npm i some-library
//npm i -D @types/some-library
import axios from "axios"
import type { AxiosResponse } from "axios"
interface Todo{
    userId: number,
    id: number,
    title:string,
    completed: boolean
}

const fetchData = async () => {
    try{
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log("Todo",response.data)
    }
    catch(err:any){
        if(axios.isAxiosError(err)){
            console.error("Axios error:", err.message)
        }
        else{
            console.error("Unexpected error:", err)
        }
    }
}


