import './VLot.css'

function VLot({trans, date, shrs, cos, comm, ban, note}) {

    return(
        <section className="lot">
            <div className="lotCol">{trans}</div>
            <div className="lotCol">{date}</div>
            <div className="lotCol">{shrs}</div>
            <div className="lotCol">{cos}</div>
            <div className="lotCol">{comm}</div>
            <div className="lotCol">27,875.10</div>
            <div className="lotCol">3,993.31</div>
            <div className="lotCol">{ban}</div>
            <div className="lotCol">{note}</div>
            <button className="lotCol" id="lotBtn">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            </button>
        </section>
    )
}

export default VLot