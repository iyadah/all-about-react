import './App.css';
import Expenses from './components/Expenses';
import ExpenseForm from './components/ExpenseForm';

function App() {
    const expenses = [
    {id: 1, title: "Car insurance", amount: 223.3, date: new Date(2001, 2, 28)},
    {id: 2, title: "Groceries for office", amount: 33.7, date: new Date(2021, 4, 3)},
    {id: 3, title: "Entertainment for the kids", amount: 100.73, date: new Date(2021, 2, 21)}
  ]



  return (
    <div className="App">
      <h2>Lets start</h2>
      <ExpenseForm expenses={expenses} />

    </div>
  );
}

export default App;
