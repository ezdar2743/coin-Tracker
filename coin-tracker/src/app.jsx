import axios from 'axios';
import { useEffect, useState } from 'react';
import Convert from './components/convert';
import Select from './components/select';

function App() {
  const [coinList,setCoinList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    axios.get('https://api.coinpaprika.com/v1/tickers')
      .then(res =>{
        setCoinList(res.data);
        setLoading(current => !current)
        
      })
  },[])
  
  
  return (
    <>
    <h1>{`Coin Tracker(${coinList.length})`}</h1>
    {loading ? <strong>Loading..</strong> : <Select coinList={coinList}/>}
    <Convert/>
    
    
    


    </>
  );
}

export default App;
