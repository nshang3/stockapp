import './AddQuote.css';
import VQuote from './VQuote.js';
import { useState } from 'react';

function AddQuote({onClose, createVQuote}){
    //cosnt [isAddQuote, setisAddQuote] = useState(false)

    return (

    <div className="popup-container">
      <div className="popup">
        <h2 className="title">Add to holdings</h2>
        <form >
            <input type="text" id="searchSym" name="searchSym" placeholder='Search symbol'/>
        </form>
        <button onClick={onClose} className="btn"> Cancel </button>
        <button onClick={() => {createVQuote(); onClose();}} className="btn"> Save </button>

      </div>
    </div>
    
    )
};

export default AddQuote;