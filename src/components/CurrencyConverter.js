import { useEffect, useState } from 'react';
import CurrencyTwo from './Currency';

function App() {
  const [unitOptions, setUnitOptions] = useState([])
  const [fromUnit, setFromUnit] = useState('USD')
  const [toUnit, setToUnit] = useState('USD')
  const [fromAmount,setFromAmount ] = useState('1')
  const [toAmount,setToAmount ] = useState('1')
  const [fromChanged, setFromChanged] = useState(true)
  const BASE_URL = 'https://open.er-api.com/v6/latest/'


  useEffect(()=>{
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res=> res.json())
    .then(data=>{
      // console.log(Object.keys(data.rates))
      setUnitOptions(Object.keys(data.rates))
    })
    // console.log('unitOptions: ',unitOptions)
  },[])

  useEffect(()=>{
    if(fromChanged){
      fetch(`${BASE_URL}/${fromUnit}`)
      .then(res=> res.json())
      .then(data=>{
        // console.log(data.rates[toUnit])
        setToAmount(data.rates[toUnit]*fromAmount)
      })
    }
    else{
      fetch(`${BASE_URL}/${toUnit}`)
      .then(res=> res.json())
      .then(data=>{
        // console.log(data.rates[fromUnit])
        setFromAmount(data.rates[fromUnit]*toAmount)
      })
    }
      
  },[fromAmount,toAmount, fromUnit, toUnit])

  function handleFromUnitChange(e){
    setFromUnit(e.target.value)
    // setFromChanged(true)
  }

  function handleToUnitChange(e){
    setToUnit(e.target.value)
    // setFromChanged(false)
  }

  function handleFromAmountChange(e){
    setFromAmount(e.target.value)
    setFromChanged(true)
  }
  
  function handleToAmountChange(e){
    setToAmount(e.target.value)
    setFromChanged(false)
    // console.log("ToAmount: ", toAmount)
  }

  return (
    <div className="App pt-4">
      <CurrencyTwo 
        unitOptions = {unitOptions}
        unit = {fromUnit}
        amount = {fromAmount}
        handleUnitChange = {handleFromUnitChange}
        handleAmountChange = {handleFromAmountChange}
      />
      =
      <CurrencyTwo 
        unitOptions = {unitOptions}
        unit = {toUnit}
        amount = {toAmount}
        handleUnitChange = {handleToUnitChange}
        handleAmountChange = {handleToAmountChange}
      />
    </div>
  );
}

export default App;
