import { useState } from 'react'
import { Inputbox } from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount]= useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const[convertedAmount, setconvertedAmount]= useState(0)
  const currencyinfo= useCurrencyInfo(from)
  const options= Object.keys(currencyinfo)

  const swap= ()=>{
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert=()=>{
    setconvertedAmount(parseFloat(amount*currencyinfo[to]).toFixed(2))
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url('https://i.pinimg.com/564x/a4/e8/ec/a4e8ec629a520b2ef8c8865a1b075bbf.jpg')`,}}>
      <div className='w-10/12 h-40 bg-green-900 text-white flex justify-center items-center text-2xl gap-5 rounded-md'>
      <div className='w-3/12 h-1/2 text-white flex justify-center items-center font-bold font-poppins text-6xl px-6'>Currency Convertor</div>
      <div className='w-9/12 h-full bg-slate-300'
      style={{backgroundImage: `url('https://i.pinimg.com/564x/a1/ca/c5/a1cac504eb52923789c1759cb582fe3a.jpg')`,}}></div>
      
      </div>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
           <form onSubmit={(e)=>{
            e.preventDefault()
            // it wont go anywhere
            convert()
           }}>
            <div className='w-full mb-1'>
              <Inputbox label="From"
              amount={amount}
              currencyoption={options}
              onCurrencyChange={(currency)=>
                setFrom(currency)
              }
              selectCurrency={from}
              onAmountchange={(amount)=>setAmount(amount)}
              />

            </div>
            <div className='relative w-full h-0.5'>
              <button className='absolute left-1/2
              -translate-x-1/2
              -translate-y-1/2
              border-white rounded-md
              bg-green-600 text-white px-2 py-0.5'
              onClick={swap}>
                swap
              </button>

            </div>
            <div className='w-full mt-1 mb-4'>
              <Inputbox label="To"
              amount={convertedAmount}
              currencyoption={options}
              onCurrencyChange={(currency)=>
                setTo(currency)
              }
              selectCurrency={to}
              amountdisable
              />
            </div>
            <button type="submit"
            className='w-full bg-green-600 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
           </form>
        
        </div>
      </div>
    </div>
  );
}

export default App


