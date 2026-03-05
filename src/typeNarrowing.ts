function getchai(kind: string | number){
    if(typeof kind === 'string'){
        console.log(`i like ${kind} chai`);

    }
    return `chai ordered is ${kind}`;
}

function serverChai(msg?: string){
    if(msg){
        console.log(`Server says: ${msg}`);
    }   
  return "chai served";
}

// exaustive check
function orderChai(size : "small" | "medium" | "large"){
    if(size === "small"){
        console.log("small chai ordered");
    }
    if(size === "medium" || size === "large"){
        console.log("make extra chai")
    }
    return `ordered ${size} chai`
}


class KulhadChai{
    serveChai(){
        console.log("chai served in kulhad");
    }
}

class CuttingChai{
    serveChai(){
        console.log("chai served i cutting chai style");
    }
}
function serveChai(chai: KulhadChai | CuttingChai){
if(chai instanceof KulhadChai){
    return chai.serveChai();
}
}

type chaiOrder = {
    type:string,
    sugar: number
}

function isChaiorder(obj:any):obj is chaiOrder{
return(
     typeof obj === 'object' && obj !== null && typeof obj.type === 'string' &&
      typeof obj.sugar === 'number'
)
}

function serveOrder(item:chaiOrder | string){
    if(isChaiorder(item)){
        return `Serving ${item.type} chai with ${item.sugar} spoons of sugar`;
    }
    return `Serving custom chai ${item}`;
}

type MasalaChai = {type: "masala", spiceLevel: number};
type GingerChai = {type: "ginger" , amount: number};
type ElaichiChai = {type: "elaichi", elaichiCount: number};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order:Chai){
    switch(order.type){
        case "masala":
        return "Masala Chai"
        break;
        case "ginger":
        return "Ginger Chai"
        break;
        case "elaichi":
        return "Elaichi Chai"
        break;
      
    }
}