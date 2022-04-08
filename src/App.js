import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
function App() {
  const expenses=[
    {id: 1, expenseTitle:"Car Insurance", expenseAmount : 456.5, expenseDate : new Date(2022,2,28) },
    {id: 2, expenseTitle:"Term Insurance", expenseAmount : 456.5, expenseDate : new Date(2021,3,28) },
    {id: 3, expenseTitle:"Bike Insurance", expenseAmount : 456.5, expenseDate : new Date(2020,10,15) },
    {id: 4, expenseTitle:"Health Insurance", expenseAmount : 456.5, expenseDate : new Date(2022,2,5) },
  ]
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
