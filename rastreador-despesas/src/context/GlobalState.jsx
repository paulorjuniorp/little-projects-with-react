import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions:[
        {id:1, text:'Flores',amount:-20},
        {id:2, text:'Salário',amount:300},
        {id:3, text:'Livro',amount:-10},
        {id:4, text:'Câmera',amount:150},
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function hundleDeleteTransaction(id){
        dispatch({
            type: 'TRANSACTION_DELETE',
            payload: id
        })
    }

    function hundleAddTransaction(transaction){
        dispatch({
            type: 'TRANSACTION_ADD',
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        hundleDeleteTransaction,
        hundleAddTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}