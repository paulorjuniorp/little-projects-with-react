// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case 'TRANSACTION_DELETE':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
              }
        case 'TRANSACTION_ADD':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
              }
        default:
            return state;
    }
}
