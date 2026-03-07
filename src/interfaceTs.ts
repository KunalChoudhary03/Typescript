type ChaiOrder = {
    type: string,
    sugar: number,
    strong: boolean
}

function makeChai(order:ChaiOrder){
    console.log(order)
}
function serveChai(order:ChaiOrder){
    console.log(order);
}


type TeaRecipe = {
    water: number;
    milk: number;
}

// class MasalaChai implements TeaRecipe{
//     water = 100;
//     milk = 50;
// }

interface cupSize { 
   size : "small" | "medium" | "large"
}

class chai implements cupSize{
  size : "small" | "medium" | "large" = "medium"
}

// type Response = {ok:true} | {ok:false}
// class myRes implements Response{
//   ok : boolean = true
//     }

//literal types
let response: string = "success"
response = "failure"
// response = "other" // this will cause a compile time error because response can only be "success" or "failure"
type TeaType  = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(t)
}
type BaseChai = {tealeaf: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup : MasalaChai = {
    tealeaf: 10,
    masala: 5
}

type User = {
    name: string;
    age?: number
}

const user1:User ={
    name: "John"
}
const user2 : User ={
    name: "Jane",
    age: 30
}

type Config = {
    readonly appName: string;
    version:number
}

const cfg: Config ={
    appName: "ChaiApp",
    version: 1.0
}

// cfg.appName = "NewChaiApp" // this will cause a compile time error because appName is readonly
