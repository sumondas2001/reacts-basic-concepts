import './App.css'
import Card from './components/card/Card'
import Price from './components/card/Price'
import PropsChildren from './components/card/childrnProps'
import UseState from './components/card/useState/UseState'
import UseEffect from './components/useEffect/useEffect'



function App() {

  const data = [
    { title: "Shoes!", price: "$ 200" },
    { title: "Nike Shoes", price: "$500" },
    { title: "Shoes!", price: "$ 400" },
    { title: "Nike Shoes", price: "$1500" }
  ]

  return (
    <>
      <h1 className='text-center text-4xl font-mono mt-5 text-red-500'>Welcome To My Card</h1>
      <div className='grid grid-cols-3 gap-3  '>
        {
          data.map(card => (
            <Card title={card.title} price={card.price}></Card>
          ))
        }

      </div>

      {/* <PropsChildren>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsa?</p>
      </PropsChildren> */}
      <UseState></UseState>
      <UseEffect></UseEffect>
    </>
  )
};

// function Greeting() {
//   return (
//     <div>

//     </div>
//   )
// }

export default App
