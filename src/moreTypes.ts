let response :any = '423'

let numericLength:number = (response as string).length

type Book = {
    name : string
}

let bookString = '{"name": "who moved my cheese"}';
let bookObject  = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;


let value: any
value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase() // no error at compile time but will throw error at runtime

let newValue: unknown
newValue = "chai"
newValue = [1,2,3]
newValue = 2.5
if(typeof newValue === "string"){
    newValue.toUpperCase() // no error at compile time and will work at runtime
}


try{

}catch(err){
     if(err instanceof Error){
        console.log(err.message);
     }
     console.log("An error occurred" , err);
}

const data:unknown  = "chai"
const strData: string = data as string


type Role = "admin" | "user"| "superadmin" ;
function redirectBasedOnRole(role:Role):void{
    if(role === "admin"){
        console.log("redirecting to admin dashboard")
        return
    }
    if(role==="user"){
        console.log("redirecting to user dashboard")
        return
    }
    role // this will cause a compile time error because role can only be "admin" or "user"
}
function neverReturn():never{
    while(true){
        
    }
}
