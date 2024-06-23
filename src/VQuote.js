import './VQuote.css';
import { useEffect, useRef, useState } from 'react';


  function VQuote({qKey, sym, regPrice, close }){

    function handleDelete() {
      console.log(qKey)
      close(qKey)
    }
    return (
        <>
        <section key={qKey} className="Quote">
        <button className="DropDown">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path d="M11.1156 15.1648L0.650006 0.262842L21.2344 0.0252577L11.1156 15.1648Z" fill="#1B4920"/>
          </svg>
        </button>
          <div className="Vcol">{sym}</div>
          <div className="Vcol">321</div>
          <div className="Vcol">{regPrice}</div>
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
          <button onClick={() => {handleDelete()}} className="DropDown">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          </button>
        </section>
        </>
    )
}
export default VQuote;
// ViewQuote()



