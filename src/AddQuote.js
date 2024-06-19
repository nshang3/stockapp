import './AddQuote.css';
import { useState, useEffect, useRef, useMemo } from 'react';


function AddQuote({onClose, createVQuote}){
  const [save, setSave] = useState(false)

  const options = useMemo(() => ({
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': 'dd16385198msh05d12eea1e24340p19d96cjsn508075aa4433',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  }), [])

  const [dojoURL, setDojoURL] = useState(null)
  const inputRef = useRef()


  const fetchQuotes = () => {
    
      fetch(dojoURL, options)
      .then(function(resp){
        return resp.json();
      })
      .then(function(quotes){

        console.log(quotes)
        createVQuote(quotes.quoteResponse.result[0].symbol, quotes.quoteResponse.result[0].regularMarketPrice )
        //pass quotes.quoteResponse.result[0].symbol as arguemnt to createVQuote that has parameters??
        //quotes.quoteResponse.result[0].regularMarketPrice
      })
  }

  useEffect( () =>{

    if (dojoURL != null){

    fetchQuotes()
    if (save){
      onClose()

    }

  }
    
  }, [dojoURL])

  function handleClick(){

    setSave(true)
    setDojoURL(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=`+ inputRef.current.value)

  }


    return (

    <div className="popup-container">
      <div className="popup">
        <h2 className="title">Add to holdings</h2>
        <form >
            <input type="text" id="searchSym" ref={inputRef}  placeholder='Search symbol'/>
        </form>
        <button onClick={onClose} className="btn"> Cancel </button>
        <button onClick={() => {handleClick();}} className="btn"> Save </button>

      </div>
    </div>
    
    )
};

export default AddQuote;