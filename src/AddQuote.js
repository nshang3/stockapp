import './AddQuote.css';
import VQuote from './VQuote.js';
import { useState, useEffect, useMemo, useRef } from 'react';


function AddQuote({onClose, createVQuote, setSym, setMarkPric}){
  const [srchSymbol, setSrchSymbol] = useState('LMT')
  var searchSymbol = 'LMT';
  const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=' + srchSymbol;

  
  const options = useMemo(() => ({
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': 'dd16385198msh05d12eea1e24340p19d96cjsn508075aa4433',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  })
  )

  
  const [dojoURL, setDojoURL] = useState(url)
  const inputRef = useRef()


  const fetchQuotes = () => {
      fetch(dojoURL, options)
      .then(function(resp){
        return resp.json();
      })
      .then(function(quotes){
        
        console.log(quotes)
        setSym(quotes.quoteResponse.result[0].symbol)
        setMarkPric(quotes.quoteResponse.result[0].regularMarketPrice)
      })
  }

  useEffect( () =>{
    fetchQuotes()
  }, [])//a depdency for re render

  function handleClick(){
    setSrchSymbol(inputRef.current.value)
    console.log(inputRef.current.value)
  }
    return (

    <div className="popup-container">
      <div className="popup">
        <h2 className="title">Add to holdings</h2>
        <form >
            <input type="text" id="searchSym" ref={inputRef}  placeholder='Search symbol'/>
        </form>
        <button onClick={onClose} className="btn"> Cancel </button>
        <button onClick={() => {createVQuote(); onClose(); handleClick();}} className="btn"> Save </button>

      </div>
    </div>
    
    )
};

export default AddQuote;