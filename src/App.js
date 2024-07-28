
import './App.css';
import './VSummary.css'
import VQuote from './VQuote.js';
import AddQuote from './AddQuote.js';

import { useState, useRef, useEffect } from 'react';


function App() {
  const [isQuote, setIsQuote] = useState(false) 
  const [VQuotes, setVQuotes] = useState([]) 
  const id = useRef(0)

  const openAddQ = () =>{
    setIsQuote(true)
  }
  const closeAddQ = () =>{
    setIsQuote(false)
  }

  // function genVQuote(symbol='-', regPrice='0'){
  //   setVQuote([...VQuotes, { key: id.current++, symbol, regPrice}])
  // }

  useEffect(() =>{
    //console.log("I'm called in App ")
    async function getQuotes(){
      const response = await fetch(`http://localhost:5050/quotes/`)
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.log(message);
        return;
      }

      const vquos = await response.json()
      setVQuotes(vquos)
      console.log(vquos)
    }
    getQuotes()
    return;
  }, [VQuotes.length, isQuote])
  
  function closeVQuote(selKey){
  
  setVQuotes(VQuotes.filter(quote => quote._id !== selKey ))

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
      {isQuote && <AddQuote onClose={closeAddQ}/>}

      <button className="bankBtn">Sort By Bank</button>
      <button className="sortBtn">Sort A-Z</button>
    </section>
    <div className="line">
    </div>

    <VSummary />

    <div className='qCont'>
    <ColumnHead />
    {VQuotes.map(quote => <VQuote key={quote._id} qKey={quote._id} sym= {quote.symbol} regPrice= {parseFloat(quote.lastPrice)} close={closeVQuote} /> )}
    </div>

    <footer className="Footer"></footer>
  </>
  );
}

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
//useEffect to display the VQuote from database, we will first store the VQuote with _id, symbol by calling setVQuote
export default App;
