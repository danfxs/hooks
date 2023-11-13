import React, { useReducer, useRef } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'


const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const myInputNumber = useRef(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem usuário</span>}                
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberMultiply7'})}>*7</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberDivide25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberRound'})}>Round</button>
                    <button className="btn" onClick={() => login(dispatch, "João")}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberAddN', payload: myInputNumber.current.value})}>+N</button>
                </div>
                <div>
                    <input type="number" className="input" ref={myInputNumber} />
                </div>
            </div>
        </div>
    )
}

export default UseReducer
