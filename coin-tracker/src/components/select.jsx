import React, { useState } from 'react';
import Convert from './convert';

const Select = ({coinList}) => {
    const [select, setSelect] = useState(false)
    const[price,setPrice] = useState(0);
    const coins = coinList.map((item)=>
    (
    <option key={item.id} value={item.quotes.USD.price}>{item.name}({item.symbol} price:${item.quotes.USD.price}) </option>
      )
  )
  const onChange= (e)=>{
    setPrice(e.target.value)
    e.target.value==='0'? setSelect(current => !current): setSelect(true);

  }

    return (
      <>
        
        <select onChange= {onChange}>
          <hr/>
          <option value='0' >Select your coin</option>
            {coins}
         </select>
         
         {!select? <h1>Please Select Coin</h1> :<Convert price = {price} />}
         
         </>
    );
};

export default Select;