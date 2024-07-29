
import { useEffect, useState } from 'react';
import '../assets/css/statistics.css';
import { useExpenses } from '../contexts/expensesContext';


export default function Statistics() {
    const { expenses } = useExpenses();
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);
        setTotalAmount(total);
    }, [expenses]);

    return (
        <div className='stats'>

            <div className="stat">
                <div className="image">
                    <img src={"/icons/Total.png"} alt="category icon" />
                </div>
                <div className="text">
                    <div className="left">
                        <div className='title'>Total Amount</div>
                    </div>
                    <div className="right">
                        <div className='big_number'>$<span>{totalAmount}</span></div>
                    </div>
                </div>
            </div>

            <div className="stat last">
                <div className="image">
                    <img src={"/icons/Expenses.png"} alt="category icon" />
                </div>
                <div className="text">
                    <div className="left">
                        <div className='title'>Expenses</div>
                    </div>
                    <div className="right">
                        <div className='big_number'><span>{expenses.length}</span></div>
                    </div>
                </div>
            </div>
            <div className="filter_bg">
                <div className="illustration">
                    <img className='image' src="/img/stats.png" alt="statistics illustration" />
                </div>
            </div>
        </div>
    )
}
