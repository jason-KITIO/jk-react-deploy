import React, { useReducer } from "react";

function Counter() {

    const inicialState = { count: 0 }

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'Decremente':
                return { count: state.count - 1 }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, inicialState)

    return (
        <div>
            <p>Le nombre est {state.count} </p>
            <button onClick={() => dispatch({ type: 'increment' })} >Increment</button>
            <button onClick={() => dispatch({ type: 'Decremente' })} >Decremente </button>
        </div>
    )
}

export default Counter