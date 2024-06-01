
import './App.css';
import './VSummary.css'
import VQuote from './VQuote.js';
import AddQuote from './AddQuote.js';

import { useState } from 'react';

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
function App() {
  const [isQuote, setIsQuote] = useState(false) 

  const openAddQ = () =>{
    setIsQuote(true)
  }
  const closeAddQ = () =>{
    setIsQuote(false)
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
    <VQuote />
    <VQuote />
    <VQuote />
    <VQuote />
    <VQuote />
    <VQuote />
    <VQuote />
    
    <footer className="Footer"></footer>
  </>
  );
}
//create small form component for add quote, then add quote will have useState() for user input to change up the keywords for the API
//VQuote will be imported, do you still need a controller if using hooks?
//to display after pressing add quote probably useState for the actual interaction and then a  useEffect
//create total info component after adding all the quotes, which state would this be? I think useState
export default App;
