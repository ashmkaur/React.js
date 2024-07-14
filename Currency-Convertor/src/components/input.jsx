import React, {useId} from 'react'

function Inputbox({label,
    amount,
    onAmountchange,
    onCurrencyChange,
    currencyoption=[],
    selectCurrency="usd",
    amountdisable=false,
    currencydisable=false,
    className="",}){
    const inputidamount= useId()    
    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* if user wants his css to be injected */}
            <div className='w-1/2'>
            <label htmlFor='inputidamount' className='text-black/40 mb-2 inline-block'>
            {label}</label>
            <input type="number"
            className='outline-none w-screen bg-transparent py-1.5'
            placeholder='Amount'
            disabled= {amountdisable}
            value={amount}
            onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}/>
            {/* JS being notorious takes somethin gin string so we wrapped it in the number */}
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'><p className='text-black/40 mb-2 w-full'>Currency type</p>
            <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencydisable}>
                {currencyoption.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            </div>
        </div>
    );
}

export default Inputbox;