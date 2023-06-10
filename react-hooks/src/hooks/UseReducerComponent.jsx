import React from 'react'
import { useReducer } from 'react'


 const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 , showText: state.showText}
        case 'toggleShowText':
            return { count: state.count, showText: !state.showText };
        default:
            return state
    }
}


const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer, {count:0, showText: true});

    return (
        <>
            <h3>UseReducerComponent</h3>
            <h3>Count: {state.count}</h3>
            <button
                onClick={() => 
                    {
                        dispatch({type: 'INCREMENT'});
                        dispatch({type: 'toggleShowText'});
                    }}
            >Click here</button>
            {state.showText && <h3>Show Text</h3>}
        </>
    )
}

export default UseReducerComponent