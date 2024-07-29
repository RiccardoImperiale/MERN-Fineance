import '../assets/css/statistics.css';


export default function Statistics() {
    return (
        <div className='stats'>

            <div className="stat">
                <div className="image">
                    <img src={"/icons/Food.png"} alt="category icon" />
                </div>
                <div className="text">
                    <div className="left">
                        <div className='title'>Total Amount</div>
                    </div>
                    <div className="right">
                        <div className='big_number'>$<span>34,53</span></div>
                    </div>
                </div>
            </div>

            <div className="stat">
                <div className="image">
                    {/* <img src={"/icons/Food.png"} alt="category icon" /> */}
                </div>
                <div className="text">
                    <div className="left">
                        <div className='title'>Expenses</div>
                    </div>
                    <div className="right">
                        <div className='big_number'><span>34</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
