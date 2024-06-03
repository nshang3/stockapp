import './VQuote.css';
//import { useEffect } from 'react';

const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=GOOG%2CIBM%2CAAPL';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dd16385198msh05d12eea1e24340p19d96cjsn508075aa4433',
		'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
	}
};

  function VQuote({text}){
    // try {
    //     fetch(url, options)
    //     .then(function(resp){
    //         return resp.json();
    //     })
    //     .then(function(quotes){
            
    //         console.log(quotes)

    //     })
    // } catch (error) {
    //     console.error(error);
    // }

    return (
        <>
        <section className="Quote">
        <p>{text}</p>
        </section>
        </>
    )
}
export default VQuote;
// ViewQuote()



