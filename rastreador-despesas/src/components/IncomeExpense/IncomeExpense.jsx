import React, { useContext } from 'react';
import {GlobalContext} from '../../context/GlobalState';

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const renda = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2);

    const despesa = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0)*-1).toFixed(2);

    return(
        <div className="inc-exp-container">
            <div>
                <h3>Renda</h3>
                <p id="money-plus" className="money plus">+R${renda}</p>
            </div>
            <div>
                <h3>Despesa</h3>
                <p id="money-minus" className="money minus">-R${despesa}</p>
            </div>
        </div>
    )
}

export default IncomeExpense;