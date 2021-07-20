import React, { useContext } from 'react';
import {GlobalContext} from '../../context/GlobalState';

const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transactions => transactions.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return(
        <div>
            <h3>Seu balanço</h3>
            <h1 id="balance">R$ {total}</h1>
        </div>
    )
}

export default Balance;