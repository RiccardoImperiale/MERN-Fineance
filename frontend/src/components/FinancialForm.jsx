import "../assets/css/financial_form.css"

export default function FinancialForm() {
    return (
        <form >
            {/* TITLE */}
            <div className="input_group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" />
            </div>
            {/* AMOUNT */}
            <div className="input_group">
                <label htmlFor="amount">amount</label>
                <input type="number" id="amount" name="amount" />
            </div>
            {/* CATEGORY */}
            <div className="input_group">
                <label htmlFor="category">category</label>
                <select className="input" id="category" name="category">
                    <option value="">Select a Category</option>
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Salary">Salary</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            {/* PAYMENT */}
            <div className="input_group">
                <label htmlFor="payment">Payment Method:</label>
                <select className="input" id="payment" name="payment">
                    <option value="">Select a Payment Method</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>
            </div>
            <button type="submit" className="button">
                Add Record
            </button>
        </form>
    )
}
