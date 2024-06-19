
import './App.css';
import './VSummary.css'
import VQuote from './VQuote.js';
import AddQuote from './AddQuote.js';

import { useState, useRef } from 'react';

function VSummary(){
  return (
    <>
    <section>
      <h2 className="totalValue">-</h2>
      <h3 className="gain">Day Gain: -</h3>
      <h3 className="gain" >Total Gain: -</h3>
    </section>
    </>
  )
}

function ColumnHead(){
  return (
    <>
    <div className="quoteHeader">
      <div className="quoteCols">Symbol</div>
      <div className="quoteCols">Shares</div>
      <div className="quoteCols">Last Price</div>
      <div className="quoteCols">Market Value</div>
      <div className="quoteCols">Avg Cost</div>
      <div className="quoteCols">Total Cost</div>
      <div className="quoteCols">Dividend</div>
      <div className="quoteCols">Daily Gain</div>
      <div className="quoteCols">Total Gain</div>
      <div className="quoteCols">Total Return</div>
    </div>
    </>
  )
}

function App() {
  const [isQuote, setIsQuote] = useState(false) 
  const [VQuotes, setVQuote] = useState([]) 
  const id = useRef(0)

  const openAddQ = () =>{
    
    setIsQuote(true)
  }
  const closeAddQ = () =>{
    setIsQuote(false)
  }

  function genVQuote(symbol='-', regPrice='0'){
    setVQuote([...VQuotes, { key: id.current++, symbol, regPrice}])
  }

  return (  
  <>
    <section className="Nav">
      <div className="Outer">
        <div className="Inner">
            <h1 className="Title">STOCK KEEPER</h1>
        </div>
      </div>
    </section>
    <div className="line">
    </div>

    <section className="DashBoard">
      <h2 className="holdingsBox">MY HOLDINGS</h2>
      
      <button className="quoteBtn" onClick={openAddQ}> Add Quote</button>
      {isQuote && <AddQuote onClose={closeAddQ} createVQuote={genVQuote} />}

      <button className="bankBtn">Sort By Bank</button>
      <button className="sortBtn">Sort A-Z</button>
    </section>

    <div className="line">
    </div>

    <VSummary />

    <div className='qCont'>
    <ColumnHead />
    {VQuotes.map(quote => <VQuote key={quote.key} sym= {quote.symbol} regPrice= {quote.regPrice} /> )}
    </div>

    <footer className="Footer"></footer>
  </>
  );
}

//VQuote will be imported, do you still need a controller if using hooks?
//create total info component after adding all the quotes, which state would this be? I think useState
export default App;
