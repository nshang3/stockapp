import './AddLot.css'
import { useState, useEffect, useRef} from 'react';

function AddLot( {close} ){

    const [formData, setFormData] = useState({
         transType: "",
         date: "",
         shares: 0,
         cost: 0.0,
         comm: 0.0,
         bank: "",
         notes: ""
    })

    const inputRefs = useRef(Array(7).fill(null))

    const postLot = async () => {

        console.log(formData)
        const lot = {...formData}

        try{
            let response;

            response = await fetch("http://localhost:5050/lots", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(lot)
            })
            
            close()
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
        }
        catch (error) {
            console.error('A problem occurred adding or updating a record: ', error);
        }
    }   
    
    useEffect ( () => {
        if(formData.transType != ""){
            postLot()
        }
    },[formData])

    const submitForm = (event) => {
        event.preventDefault();

        setFormData( prevData => Object.keys(prevData).reduce( (acc, key, index) => {
            acc[key] = inputRefs.current[index].value;
            return acc;    
        }, {}))
    }
    //use reduce to create a new object that has the same keys, a rule to create new objects instead of overriding pre-existing ones in react
    //you can use reduce since the accumulator acc is the value that is returned with reduce(callbackFn, initialValue) in this case initialValue = {}
    //{} is an object and acc will take an intialValue if specified- in this case an object.
        return (
            <div className="addCont">
            <form onSubmit={submitForm}>
                <div className="formCont">
                    <div className="lotForm">
                        <div className="col">
                            <label htmlFor="tranType">Transaction Type</label>
                            <select id="tranType" className="inputBox" ref={(el) => (inputRefs.current[0] = el)}> 
                                <option value="Buy">Buy</option>
                                <option value="Sell">Sell</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="addDate">Date</label>
                            <input type="date" id="addDate" ref={(el) => (inputRefs.current[1] = el)} className="inputBox"></input>
                        </div>
                        <div className="col">
                            <label htmlFor="shares">Shares</label>
                            <input type="text" id="shares" className="inputBox" ref={(el) => (inputRefs.current[2] = el)}></input>
                        </div>
                        <div className="col">
                            <label htmlFor="costPerShare">Cost/Share</label>
                            <input type="text" id="costPerShare" className="inputBox" ref={(el) => (inputRefs.current[3] = el)}></input>
                        </div>
                        <div className="col">
                            <label htmlFor="comm">Commission</label>
                            <input type="text" id="comm" className="inputBox" ref={(el) => (inputRefs.current[4] = el)}></input>
                        </div>
                        <div className="col">
                            <label htmlFor="bank">Bank</label>
                            <input type="text" id="bank" className="inputBox" ref={(el) => (inputRefs.current[5] = el)}></input>
                        </div>
                        <div className="col">
                            <label htmlFor="notes">Notes</label>
                            <input type="text" id="notes" className="noteBox" ref={(el) => (inputRefs.current[6] = el)}></input>
                        </div>
                    </div>
                    <div className="btnCont">
                            <input className="abtn" type="submit"></input>
                            <button className="abtn" onClick={() => {close()}}>Cancel</button>
                    </div>
                </div>

            </form>

            </div>       

    )
}

export default AddLot;