import './App.css';
import AddTransaction from './components/AddTransaction/AddTransaction';
import Balance from './components/Balance/Balance';
import Header from './components/Header/Header';
import IncomeExpense from './components/IncomeExpense/IncomeExpense';
import TransactionList from './components/TransactionList/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <h1>Deus é fiel!</h1>
      <Header/>
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
