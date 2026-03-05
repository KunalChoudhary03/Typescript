let subs: number | string = "1M";

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';


let airLineSeat: "aisle" | "window" | "middle" = "aisle";

airLineSeat = "window";

const orders = ['12','20', '28','48'];

let currentOrder:string | undefined;

for(let order of orders){
    if(order === '20'){
        currentOrder = order;
        break;
    }
    currentOrder = order;
}

console.log(`Current order is ${currentOrder}`);