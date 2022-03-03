import axios from 'axios';
import { useEffect, useState } from 'react';
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
    
    
    
    


    </>
  );
}

export default App;
