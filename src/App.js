
import './App.css';

function App() {
  return (  
  <>
    <section className="Nav">
      <div className="Outer">
        <div className="Inner">
            <h1 className="Title">STOCK KEEPER</h1>
        </div>
      </div>
    </section>
    <div className="line">
    </div>

    <section className="DashBoard">
      <h2 className="holdingsBox">MY HOLDINGS</h2>
      
      <button className="quoteBtn">Add Quote</button>
      <button className="bankBtn">Sort By Bank</button>
      <button className="sortBtn">Sort A-Z</button>
      </section>

    <div className="line">
    </div>
  </>
  );
}

export default App;
