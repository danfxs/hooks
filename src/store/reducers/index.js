export default function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2}
        case 'login':
            return { ...state, user: {name: action.payload}}
        case 'numberMultiply7':
            return { ...state, number: state.number * 7}
        case 'numberDivide25':
            return { ...state, number: state.number / 25}
        case 'numberRound':
            return { ...state, number: parseInt(state.number)}
        case 'numberAddN':
            return { ...state, number: state.number + parseInt(action.payload)}
        default:
            return state
    }
}