import './AddQuote.css';
import { useState, useEffect, useRef, useMemo } from 'react';


function AddQuote({onClose}){

  const [quote, setQuote] = useState({
    symbol: "",
    lastPrice: 0.0,

  })

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


  const fetchQuotes = async () => {
    try {
      const response = await fetch(dojoURL, options)
      const quotes = await response.json()
      //console.log(quotes.quoteResponse.result[0].regularMarketPrice)

      setQuote(prev => ({
        ...prev,
        symbol: quotes.quoteResponse.result[0].symbol, 
        lastPrice: quotes.quoteResponse.result[0].regularMarketPrice,
      }));
      

    }  
      catch (error) {
        console.error(error)
      }
  }

  const post = async () => {
    
    const quo = {...quote}
  

    try{
      let response;

      response = await fetch("http://localhost:5050/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quo),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    }
    catch (error) { 
      console.error('A problem occurred adding or updating a record: ', error);
    }
  }

  useEffect( () =>{
      
      if (quote.symbol != "" ){
      post()

      if (save){
        onClose()
      }

      }
  }, [quote])

  useEffect( () =>{

    if (dojoURL != null){
      fetchQuotes()
    } 
  }, [dojoURL])

  const handleClick = () =>{
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