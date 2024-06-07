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

  function VQuote({qKey}){
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
        <section key={qKey} className="Quote">
        <button className="DropDown">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path d="M11.1156 15.1648L0.650006 0.262842L21.2344 0.0252577L11.1156 15.1648Z" fill="#1B4920"/>
          </svg>
        </button>
          <div className="Vcol">GOOGL</div>
          <div className="Vcol">321</div>
          <div className="Vcol">170.90</div>
          <div className="Vcol">512.7</div>
          <div className="Vcol">94.60</div>
          <div className="Vcol">218.18</div>
          <div className="Vcol">500</div>
          <div className="Vcol">
            <p>+0.61</p>
            <p>+0.36%</p>
          </div>
          <div className="Vcol">
            <p>+13,761.52</p>
            <p>+81.77%</p>
          </div>
          <div className="Vcol">
            <p>+666,963.74</p>
            <p>+41.36%</p>
          </div>
        </section>
        </>
    )
}
export default VQuote;
// ViewQuote()



