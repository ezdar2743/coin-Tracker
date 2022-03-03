import React from 'react';

const Select = ({coinList}) => {
    const coins = coinList.map((item)=>
    (<option key={item.id}>{item.name}({item.symbol} price:${item.quotes.USD.price}) </option>)
  )
    return (
        <select>
            {coins}
         </select>
    );
};

export default Select;