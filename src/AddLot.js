import './AddLot.css'

function AddLot( {close} ){

    return (
            <div className="addCont">
            <form className="lotForm" >
                <div className="col">
                    <label htmlFor="tranType">Transaction Type</label>
                    <select id="tranType"> 
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="addDate">Date</label>
                    <input type="date" id="addDate"></input>
                </div>
                <div className="col">
                    <label htmlFor="shares">Shares</label>
                    <input type="text" id="shares" className="inputBox"></input>
                </div>
                <div className="col">
                    <label htmlFor="costPerShare">Cost/Share</label>
                    <input type="text" id="costPerShare" className="inputBox"></input>
                </div>
                <div className="col">
                    <label htmlFor="comm">Commission</label>
                    <input type="text" id="comm" className="inputBox"></input>
                </div>
                <div className="col">
                    <label htmlFor="bank">Bank</label>
                    <input type="text" id="bank" className="inputBox"></input>
                </div>
                <div className="col">
                    <label htmlFor="notes">Notes</label>
                    <input type="text" id="notes" className="noteBox"></input>
                </div>
                
            </form>

            <div className="btnCont">
            <button className="abtn">Save</button>
            <button className="abtn" onClick={() => {close()}}>Cancel</button>
            </div>

            </div>       

    )
}

export default AddLot;