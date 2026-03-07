const chaiFlavour: string[] = ["Masala", "Ginger"]
const chaiPrice: number[] = [10, 15]

const rating: Array<number> = [4.5,4.0];


type Chai = {
    type:string;
    price:number;
}

const chaiMenu : Chai[] = [
    {type: "Masala", price:10},
    {type: "Ginger", price:15}
]

const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"]

// cities.push("Chennai") // Error: Cannot add to a readonly array

chaiMenu.push({type:"Lemon", price:12}) // Allowed: We can modify the contents of the array, but not reassign it

const table: number[][] = [
    [1,2,3],
    [4,5,6]
]


let chaiTuple : [string, number];
chaiTuple = ["Masala", 10]
chaiTuple = ["Ginger", 15]

let userInfo: [string, number, boolean?];

userInfo = ["Kunal" , 30]
userInfo = ["Kunal2", 40, true]

const location: readonly [number,number] = [28.6139, 77.2090]

const chaiItems: [name:string,price:number] = ["masala", 10]

enum CupSize{
    SMALL ,
    MEDIUM ,
    LARGE 
}

const size = CupSize.MEDIUM; // 1


enum Status {
    PENDING = 100,
    SAERVED,
    CANCELLED
}

enum ChaiType {
    MASALA = "Masala",
    GINGER = "Ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making a ${type} chai...`);
}

makeChai(ChaiType.MASALA)


enum RandomEnum {
    ID = 1,
    Name = "Kunal",
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
// const sugarLevel = Sugars.MEDIUM; // Inlined as 2 during compilation


let t: [string,number] = ["Hello", 42]
t.push("World") // Allowed: Tuple can have extra elements, but they won't be type-checked