import React from 'react'
import './Coins.css'

const CoinItem = (props) => {
  const priceChange = props.coins.price_change_percentage_24h
  return (
    <div className="coin-row">
        
        <div className='img-symbol'>
        
            <img src={props.coins.image} alt='' />
            <p className='coin-short'>{props.coins.symbol.toUpperCase()}</p>
           
        </div>
       
        <p className='coin_price'>${props.coins.current_price.toLocaleString()}</p>
        {priceChange < 0 ? (
        <p className='coin-percent-low'>{props.coins.price_change_percentage_24h.toFixed(3)}%</p>
        ) : (
        <p className='coin-percent-high'>{props.coins.price_change_percentage_24h.toFixed(3)}%</p>

        )}
        <p>${props.coins.low_24h.toLocaleString()}</p>
        <p>${props.coins.high_24h.toLocaleString()}</p>
        
    </div>
  )
}

export default CoinItem