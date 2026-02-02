import React from "react";
function InputBox({
    label, // it represents whether user is inputing in the from or to section
    amount, 
    onAmountChange, // to change the state when amount changes
    onCurrencyChange , // to change the state when currency changes
    currencyOptions = [], // we put an empty array so that website doesn't crash even when we are not having a list of currency by any mistake
    selectCurrency = "usd", // to select currency , it is set to usd as a default case
    amountDisable = false, // optional
    currencyDisable = false, // optional 
    className = "",
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} // the disabled attribute is a boolean property used to make an <input> element non-interactive
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} // we will check this condition only if onAmoutChange exist i.e. amount is changed
                    // many times JS take values of events in string format that's why we converted into a number 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} // we don't nedd currency info in numbers that's why we didn't converted it
                    disabled={currencyDisable}
                >
                    {/* whenever we perform looping in JSX we need to make sure to use key{} for performance */}
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
// while making big projects we don't directly use export default InputBox; we make a seperate index.js file in the components and we import from there 
export default InputBox;