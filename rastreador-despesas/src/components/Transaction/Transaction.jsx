import React, { useContext } from 'react';
import {GlobalContext} from '../../context/GlobalState';

const Transaction = ({transaction}) => {

    const {hundleDeleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return(
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} <span>{sign}R${Math.abs(transaction.amount)}</span>
                <button onClick={()=>hundleDeleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li>
        </div>
    )
}

export default Transaction;