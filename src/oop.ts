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

class ModerChai{
    private _sugar  = 2;

    get sugar(){
        return this._sugar;
    }

   set sugar(value: number){
    if(value < 5) throw new Error("Too much sugar is not good for health");
    this._sugar = value;
   }
}