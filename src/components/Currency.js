import React, { useState } from 'react'

function CurrencyTwo(props) {

    const {
        unitOptions,
        unit,
        amount,
        handleUnitChange,
        handleAmountChange} = props

    
  return (
    <div>
        <input type='number' value={amount} onChange={handleAmountChange} />
        <select name="unit" id="unit" value={unit} onChange={handleUnitChange} >
            {
                unitOptions.map((op)=>(
                <option key={op} value={op}>{op}</option>
                ))
            }
        </select>
      </div>
  )
}

export default CurrencyTwo