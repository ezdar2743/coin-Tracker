import React, { useState } from 'react';

const Convert = () => {
    const [amount, setAmount] = useState(0);
    const onChange = (e)=>{
        setAmount(e.target.value)
    }
    const onSubmit= (e)=>{
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="coin">coin</label>
            <input 
            type="number"
            id="coin"
            value={amount}
            onChange={onChange}
            
             />
            <label htmlFor="doller">$</label>
            <input 
            type="number"
            id ="doller"
            value={amount}
            onChange={onChange}
             />
            <button>convert</button>
            
        </form>
    );
};

export default Convert;