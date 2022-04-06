import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Let's get started!</h2>
        <p>This is also visible</p>
         <ExpenseItem />
         <ExpenseItem />
      </header>
    </div>
  );
}

export default App;
