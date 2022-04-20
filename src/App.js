import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './routes/Coin'
import Navbar from './components/Navbar';
import './index.css'
import { Input } from 'react-input-component';

function App() {


  const [coins, setCoins] = useState([]);
  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState([])
  
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20binancecoin%2C%20solana%2C%20dogecoin%2C%20litecoin%2C%20bitcoin-cash%2C%20ethereum-classic%2C%20monero%2C%20helium%2C%20pancakeswap-token%2C%20%20kucoin-shares%2C%20bittorrent%2C%20zcash%2C%20%20deeper-network&order=market_cap_desc&page=1&sparkline=false'



  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
     
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const onChangeHandler = (text)=> {
    let matches = []
    if (text.length > 0) {
      matches = coins.filter(coin => {
        const regex = new RegExp(`${text}`, "gi" );
        return coin.id.match(regex)
      }) 
    }
    console.log(matches)
    setSuggestions(matches)
    setText(text)
  }




  return (
    <>
    <Navbar />

 <Input icon='search'
 className="coinInput"
  placeholder='Search...'
  onChange={event => {onChangeHandler(event.target.value)}}
    value={text}
  />
      <Routes>
  {text === "" ? <Route path='/' element={<Coins coins={coins} />} /> :
  <Route path='/' element={<Coins coins={suggestions} />} />
  }

        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
 

    </>
  );
}

export default App;

