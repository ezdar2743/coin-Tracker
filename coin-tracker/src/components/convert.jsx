import React, { useState } from 'react';
import styles from './convert.module.css'
const Convert = ({price,selectChange}) => {
    const [amount, setAmount] = useState(0);
    const [flip, setFlip] = useState(false)
    const onChange = (e)=>{
        setAmount(e.target.value)
    }
  
   
    const onSubmit= (e)=>{
        e.preventDefault();
        setAmount(0)
    }
    const onFlip= () =>{
        setFlip(current => !current)
    }
    return (
       <>
       <form onSubmit={onSubmit} className={styles.form}>
            
                <label htmlFor="coin">coin</label>
            <input 
            type="number"
            id="coin"
            value={flip? amount/price: amount}
            onChange={onChange}
            disabled={flip}
            placeholder="How many coins are you going to buy?"
            
             />
             
            
            <label htmlFor="doller">$</label>
            <input 
            type="number"
            id ="doller"
            value={!flip? price*amount: amount}
            onChange={onChange}
            disabled={!flip}
            placeholder="How much money do you have?"
             />
             <div>
            <button type='submit'>Convert</button>
            <button onClick={onFlip}>Flip</button>
            </div>
        </form>
        <h3>{flip? `You can buy ${amount/price} coin` :`You need $${price*amount} `}</h3>
    </>
    );
};

export default Convert;