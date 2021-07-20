import React, { useContext, useState } from 'react';
import {GlobalContext} from '../../context/GlobalState';

const AddTransaction = () => {
    const {hundleAddTransaction} = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmitPrevent = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        hundleAddTransaction(newTransaction);
    }

    return(
        <div>
            <h3>Adicione uma nova transação</h3>
            <form id="form" onSubmit={onSubmitPrevent}>
                <div className="form-control">
                    <label htmlFor="text">Descrição</label>
                    <input type="text" value={text} onChange={(event)=>setText(event.target.value)} id="text" placeholder="Adicione uma descrição..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Quantidade <br />
                        {/*  */}
                    </label>
                    <input type="number" id="amount" value={amount} onChange={(event)=>{setAmount(event.target.value)}} placeholder="Adicione a quantidade..."/>
                </div>
                <button className="btn">Adicionar Transação</button>
            </form>
        </div>
    )
}

export default AddTransaction;