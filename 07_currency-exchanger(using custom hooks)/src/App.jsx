import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import bgImg from './assets/bg-img.jpg'
import { useState } from 'react'

// we will use API https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

// when we click the API link we get a json formatted data but that's because of json extension , but when we call APIs to get data we recieve in string format then we need to convert it that's the case with most API's and this one too

function App() {

  // states

  const [amount,setAmount]=useState(0) // amount is number of units
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[convertedAmt,setConvertedAmt]=useState(0)

  // hook

  const currencyInfo = useCurrencyInfo(from) // currencyInfo is an object (a “rates map”) where:
  // keys = currency codes (like "inr", "eur", "jpy", …)
  // values = conversion rate for 1 unit of your from currency into that key currency

  const options=Object.keys(currencyInfo) // this will give a list of currencies 

  // swap functionality

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmt)
    setConvertedAmt(amount)
  }

  // convert functionality

  const convert=()=>{
    setConvertedAmt(amount*currencyInfo[to])
  }  

  return (
        <div
            className='w-full min-h-screen bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="w-full min-h-screen flex items-center justify-center p-4 bg-transparent">
                <div className="w-full max-w-md mx-auto rounded-3xl p-6 backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)} // changes the state of from i.e. changes the currency in from label
                                onAmountChange={(amount)=>setAmount(amount)}
                                selectCurrency={from}
                                className="bg-white/80 border border-white/40 shadow-sm"
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-blue-600/80 text-white px-4 py-2 border border-white/20 shadow-md hover:bg-blue-600/90 transition"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmt}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)} // changes the state of to i.e. changes the currency in to label
                                selectCurrency={to}
                                amountDisable // we don't want user to be able to change the amount in the to section as this isn't possible
                                className="bg-white/80 border border-white/40 shadow-sm"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600/85 text-white px-4 py-4 rounded-2xl border border-white/20 shadow-lg hover:bg-blue-600/95 transition"
                            onClick={convert}
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App