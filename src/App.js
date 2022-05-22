import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses=[
    {id: 1, expenseTitle:"Car Insurance", expenseAmount : 456.5, expenseDate : new Date(2022,2,28) },
    {id: 2, expenseTitle:"Term Insurance", expenseAmount : 456.5, expenseDate : new Date(2021,3,28) },
    {id: 3, expenseTitle:"Bike Insurance", expenseAmount : 456.5, expenseDate : new Date(2020,10,15) },
    {id: 4, expenseTitle:"Health Insurance", expenseAmount : 456.5, expenseDate : new Date(2022,2,5) },
  ]
  return (
    <div >
 
        <NewExpense/>
        <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
