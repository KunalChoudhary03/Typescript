// class Chai {
//     flavor: string;
//     price: number;

//     constructor(flavor: string, price: number) {
//         this.flavor = flavor;
//         this.price = price;
//     }
// }
// const masalaChai = new Chai("Masala", 10);

//typescript class allows define access modifiers for properties and methods. The three access modifiers are public, private, and protected.

class Chai{
    public flavor : string = "Masala"; 
    private secretIngredients = "Cardamom";

    revealSecret(){
        console.log(`The secret ingredient is ${this.secretIngredients}`);
    }
    
}
const chai = new Chai();
chai.revealSecret(); // Allowed: revealSecret is public

class Shop {
    protected ShopName:string = "Chai corner";
}

class Branch extends Shop {
    getName(){
        return this.ShopName; // Allowed: Branch can access protected property from Shop
    }
}

new Branch().getName(); // Allowed: getName is public

class Wallet {
    #balance = 100

    getBalance(){
        return this.#balance; // Allowed: getBalance can access private field #balance
    }
}

const w = new Wallet();

class Cup{
    readonly capacity: number = 250;

    constructor(capacity: number){
        this.capacity = capacity; // Allowed: We can assign a value to a readonly property in the constructor
    }

}

class MordernChai {
    private _sugar = 5;

    get sugar(){
 return this._sugar;
    }
    set sugar(value:number){
        if(value > 5){
            throw new Error("Too much sugar!");
        }
        this._sugar = value;
    }
}

const c = new MordernChai();
c.sugar = 3; // Allowed: sugar setter is public
console.log(c.sugar); // Allowed: sugar getter is public

class Tea {
    static shopName = "Chai corner";

    constructor(public flavor: string) {}
}
console.log(Tea.shopName); // Allowed: Accessing static property without creating an instance

abstract class Drink{
    abstract make(): void;
}
class Mychai extends Drink {
    make() {
        console.log("Making my chai");
    }
}


class Heater {
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}
    make(){
        this.heater.heat();
    }
}