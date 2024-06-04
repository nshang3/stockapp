
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

//var id = 0

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

  function genVQuote(){
    setVQuote([...VQuotes, id.current++])
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
      {isQuote && <AddQuote onClose={closeAddQ} createVQuote={genVQuote}/>}

      <button className="bankBtn">Sort By Bank</button>
      <button className="sortBtn">Sort A-Z</button>
    </section>

    <div className="line">
    </div>

    <VSummary />
    
    {VQuotes.map(id => <VQuote key={id} /> )}
    

    <footer className="Footer"></footer>
  </>
  );
}
//create small form component for add quote, then add quote will have useState() for user input to change up the keywords for the API
//VQuote will be imported, do you still need a controller if using hooks?
//to display after pressing add quote probably useState for the actual interaction and then a  useEffect
//create total info component after adding all the quotes, which state would this be? I think useState
export default App;
