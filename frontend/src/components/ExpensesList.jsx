import '../assets/css/expenses_list.css'

export default function ExpensesList() {
    return (
        <form className='list'>
            <div className="expense">
                <div className="image"></div>
                <div className="text">
                    <div className="left">
                        <input type="text" className='title' />
                        <select className="category" >
                            <option disabled className="first-option" value=""> Select a Category</option>
                            <option value="Food">Food</option>
                            <option value="Rent">Rent</option>
                            <option value="Salary">Salary</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="right">
                        <input type="number" className='amount' />
                        <select name="payment" required >
                            <option disabled value="">Select a Payment Method</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Cash">Cash</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="expense">
                <div className="image">f</div>
                <div className="text">
                    <div className="left">fwef</div>
                    <div className="right">fwef</div>
                </div>
            </div>

        </form>
    )
}
