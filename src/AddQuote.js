import './AddQuote.css'

function AddQuote({onClose}){
    return (

    <div className="popup-container">
      <div className="popup">
        <h2 className="title">Add to holdings</h2>
        <form >
            <label for="searchSym">Search Symbol</label>
            <input type="text" id="searchSym" name="searchSym"/>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
    
    )
};

export default AddQuote;