import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
function Expenses(props){
    const expenses = props.expenses;
    return (
        <Card className='expenses'>
        <ExpenseItem title ={expenses[0].expenseTitle} amount = {expenses[0].expenseAmount} date = {expenses[0].expenseDate} />     
        <ExpenseItem title ={expenses[1].expenseTitle} amount = {expenses[1].expenseAmount} date = {expenses[1].expenseDate} />     
        <ExpenseItem title ={expenses[2].expenseTitle} amount = {expenses[2].expenseAmount} date = {expenses[2].expenseDate} />     
        <ExpenseItem title ={expenses[3].expenseTitle} amount = {expenses[3].expenseAmount} date = {expenses[3].expenseDate} />     
        </Card>
    );
}

export default Expenses;