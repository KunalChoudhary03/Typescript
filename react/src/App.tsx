import './App.css'
import { Card } from './components/Card.tsx';
import { ChaiCard } from './components/ChaiCard.tsx'
import { ChaiList } from './components/Chailist.tsx';
import { Counter } from './components/Counter.tsx'
import { OrderForm } from './components/OrderForm.tsx';
import type {Chai} from './types.ts';
const menu : Chai[] = [
  {id:1,name:"Masala Chai",price:20},
  {id:2,name:"Ginger Chai",price:25},
  {id:3,name:"Elaichi Chai",price:30},
  {id:4,name:"Adrak Chai",price:35},
]
function App() {

  return (
    <>
      <div>
        
      <h1>Vite + React</h1>
      <ChaiCard
      name="Headphones"
      price={50}
      />
      <ChaiCard
      name="iPhone"
      price={80000}
      />
      <Counter />
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm 
        onSubmit={(order)=>{
          console.log("Placed:", order.name,order.cups)
        }}/>
      </div>
      </div>
      <div>
        <Card
         title='Chai Aur TypeScript'
         footer={<button>Order Now</button>}
        />      </div>
    </>
  )
}

export default App
