// const Chai = {
//     name : "Masala Chai",
//     price : 10,
//     isHot : true
// }
// {
//     name : string;
//     price : number;
//     isHot : boolean
// }

let tea :{
    name : string;
    price : number;
    isHot : boolean
}

tea = {
    name : "Ginger Tea",
    price : 8,
    isHot : true
}

// type Chai = {
//     name : string;
//     price : number;
//     ingredients : string[];
// }

// const myChai : Chai ={
//     name : "Lemon Tea",
//     price : 7,
//     ingredients : ["lemon", "tea leaves", "sugar"]
// }

type Cup = {size: string};
let myCup :Cup = {size: "medium"}

let bigCup = {size: "large", material: "ceramic"} 

myCup = bigCup 


type Brew = {brewTime:number}
const coffee = {brewTime: 5, type: "espresso"}
const chaiBrew : Brew  = coffee


type User = {
    name :string;
    password:string;

}
const u : User = {
    name : "John",
    password : "12345"
}

type Item = {
    name :string;
    quantity :number
}
type Address = {
    street : string;
    pin : number;
}

type Order = {
    id: string;
    items : Item[];
    address : Address;
}
// type Chai = {
//     name : string;
//     price : number;
//     isHot : boolean;
// }

const updateChai = (updates: Partial<Chai>) =>{
    console.log(updates)
}

updateChai({price: 12})
updateChai({isHot: false})
updateChai({})

type ChaiOrder = {
    name? :string;
    quantity? : number;
}

const placeOrder = (order : Required<ChaiOrder>) =>{
    console.log(order)
}

placeOrder({name:"Masala Chai", quantity: 2})

type Chai = {
    name :string;
    price : number;
    isHot : boolean;
    ingredients? : string[];    
}
type BasicChai = Pick<Chai, "name" | "price">;

const chaiInfo : BasicChai  = {
    name : "Ginger Tea",
    price : 8
}