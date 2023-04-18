import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () =>  {
        setIsEditing(true);
    }

    const stopEditingHadler = () => {
        setIsEditing(false);
    }

    
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler} >Add new expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} stopEdit={stopEditingHadler}/>}
        </div>
    );
}

export default NewExpense;