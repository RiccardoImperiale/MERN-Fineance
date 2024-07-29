
import { useState } from 'react';
import '../assets/css/expenses_list.css';
import { useExpenses } from '../contexts/expensesContext';

export default function ExpensesList() {
    const { expenses, updateExpense, deleteExpense } = useExpenses();
    const [isModal, setIsModal] = useState(false)
    const [deleteId, setdeleteId] = useState('')
    const [deleteTitle, setdeleteTitle] = useState('')

    if (!expenses) {
        console.log('ciao');
    }
    const handleUpdate = (updatedValue, key, id) => {
        const updatedExpense = expenses.find(exp => exp._id === id);
        const updatedExpenses = {
            ...updatedExpense,
            [key]: updatedValue
        };
        updateExpense(updatedExpenses);
    };

    const openModal = (id, title) => {
        setdeleteId(id)
        setdeleteTitle(title)
        setIsModal(true)
    }

    const dismissModal = () => {
        setIsModal(false)
    }

    const handleDelete = (id) => {
        deleteExpense(id);
        setIsModal(false)
    };



    if (!expenses || expenses.length === 0) {
        return (
            <>
                <button>Add New Expense</button>
            </>
        );
    }

    return (
        <>
            <form className='list'>
                {expenses.map(expense => (
                    <div className="expense" key={expense._id}>
                        <div className="image">
                            <img src={"/icons/" + expense.category + ".png"} alt="category icon" />
                        </div>
                        <div className="text">
                            <div className="left">
                                <input
                                    type="text"
                                    className='title'
                                    value={expense.title}
                                    onChange={(e) => handleUpdate(e.target.value, 'title', expense._id)}
                                />
                                <select
                                    className="category"
                                    value={expense.category}
                                    onChange={(e) => handleUpdate(e.target.value, 'category', expense._id)}
                                >
                                    <option disabled className="first-option" value="">Select a Category</option>
                                    <option value="Food">Food</option>
                                    <option value="Rent">Rent</option>
                                    <option value="Salary">Salary</option>
                                    <option value="Utilities">Utilities</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="right">
                                <div className="input_wrapper">
                                    <div className="amount_input">
                                        <input
                                            type="number"
                                            className='amount'
                                            value={expense.amount}
                                            onChange={(e) => handleUpdate(e.target.value, 'amount', expense._id)}
                                        />
                                        <span>$</span>
                                    </div>
                                    <select
                                        name="payment"
                                        value={expense.payment}
                                        onChange={(e) => handleUpdate(e.target.value, 'payment', expense._id)}
                                    >
                                        <option disabled value="">Select a Payment Method</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Bank Transfer">Bank Transfer</option>
                                    </select>
                                </div>
                                <img onClick={() => openModal(expense._id, expense.title)} className='bin_icon' src="/icons/bin.png" alt="bin icon" />
                            </div>
                        </div>
                    </div>
                ))}
            </form>

            {isModal && <div className="modal">
                <div className="modal_card">
                    <h3>Are you shure do you want to delete <span>{deleteTitle}</span>?</h3>
                    <div className="buttons">
                        <button className='close_btn' onClick={() => dismissModal()}>X</button>
                        <button className='delete_btn' onClick={() => handleDelete(deleteId)}>delete</button>
                    </div>
                </div>
                <div className="filter"></div>
            </div>}
        </>
    );
}
