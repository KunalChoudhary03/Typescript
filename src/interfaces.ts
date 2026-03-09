// interface defins the structure of an object, it is a blueprint for creating objects with specific properties and types.
interface Chai {
    flavor: string;
    price:number;
    milk?:boolean;
}

const masala: Chai = {
    flavor: "Masala",
    price: 10
}
interface Shop{
    readonly name: string;
    id: number;

}

const s : Shop = {
    name:"Chai corner",
    id: 1
}

interface DiscountCalculator {
    (price:number):number
}
const apply50 : DiscountCalculator = (price) => price * 0.5;

interface TeaMachine{
    start():void;
    stop():void;    
}
const machine :TeaMachine = {
    start(){
        console.log("Machine started");
    },
    stop(){
        console.log("Machine stopped");
    }
}

interface ChaiRatings {
    [flavor:string] : number
}
const ratings : ChaiRatings ={
    masala: 4.5,
    ginger :4.5
}

interface User {
    name : string;
}
interface User{
    age:number
}
const u: User = {
    name : "Kunal",
    age: 20
}

interface A  {a:string}
interface B  {b:string}

interface c extends A, B{}