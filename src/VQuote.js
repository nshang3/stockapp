import './VQuote.css';
import { useEffect, useRef, useState } from 'react';
import AddLot from './AddLot.js';
import VLot from './VLot.js';

  function Header(){

    return (
      <>
      <div className="lotCol" id="headCol">Transaction</div>
      <div className="lotCol" id="headCol">Date</div>
      <div className="lotCol" id="headCol">Shares</div>
      <div className="lotCol" id="headCol">Cost/Share</div>
      <div className="lotCol" id="headCol">Commission</div>
      <div className="lotCol" id="headCol">Total</div>
      <div className="lotCol" id="headCol">Total Gain</div>
      <div className="lotCol" id="headCol">Bank</div>
      <div className="lotCol" id="headCol">Notes</div>
      </>
    )
  }

  function LotsView(){
    const [addT, setAddT] = useState(false)

      function closeT(){
        setAddT(false)
      }

      function openT(){
        setAddT(true)
      }
    
    return(
      <div className="Quote" id="lot">

        <button className="addTransBtn" onClick={() => {openT()}}> 
          Add Transaction
        </button>
      
        <div className="lotCont">
          {addT && <AddLot close={closeT} />}

          <div className="lot" id="lotHeader">
            <Header />
          </div>

          <VLot />
          <VLot />
          <VLot />
        </div>

      </div>
    )
  }

  function VQuote({qKey, sym, regPrice, close }){

    const [isVLot, setIsVLot] = useState(false)
    const [rotated, setRotated] = useState(false);
    console.log(sym)
    console.log(regPrice)

    const toggleVLot = () => {
      if (isVLot == false){
        setIsVLot(true)
      }
      else{
        setIsVLot(false)
      }
    }

    const toggleRotation = () => {

      if (rotated == false){
      setRotated(true);
      }
      else {
        setRotated(false)
      }

    };

    function handleDelete() {
      console.log(qKey)
      close(qKey)
    }
    return (
      <>
      <div className="subCont">
        <section key={qKey} className="Quote">
          <button onClick={ () => {toggleVLot(); toggleRotation()}} className={`DropDown ${rotated ? 'Rotated' : ''}`}>
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
          <button className="DropDown">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          </button>
        </section>
        {isVLot && <LotsView />}
      </div>
      </>
    )
}
export default VQuote;



