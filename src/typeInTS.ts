let drink  = "chai";
let cups = Math.random() > 0.5 ? 10 : 5;
let channelName = "chai"
let chaiFlavor:string = "masala";
chaiFlavor = "ginger";
// chaiFlavor = 10; // Error: Type 'number' is not assignable to type 'string'.
console.log(`I like ${chaiFlavor} ${drink} and I have ${cups} cups of it.`);

let chaiOrder:boolean;