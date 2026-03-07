function makeChai(type:string ,cups:number){
console.log(`Making ${cups} cups of ${type} chai`)
}
makeChai("masala", 2);

function getChaiPrice():number{
    return 10;
}

function makeOrder(order:string){
    if(!order) return null
    return order
}

function logChai():void{
    console.log("Chai is ready")
}

// function orderChai(type?:string){
// }
function orderChai(type:string = 
    "malsala"){

    }
function createChai(order:{
    type:string;
    sugar:number;
    size:"small" | "medium" | "large"
}):number{
    return 10;
}

function price (order:{type:string;sugar:number,size:"small" | "medium" | "large"}):number{
  if(order.size === "small") return 5;
  if(order.size === "medium") return 10;
  if(order.size === "large") return 15;
  return 0;
}

type Order = {
type:string,quantity:number,size: "small" | "medium" | "large"
}

function deliveryFee(order:Order):number{
    if(order.size === "small") return 10;
    if(order.size === "medium") return 20;
   else return 30;
}
