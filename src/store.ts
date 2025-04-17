import { createStore } from "redux";



interface Action {
    type: string
}

interface State {
    count: number
}

const initialState = {
    count: 0
}

function counterReducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }

        case "DECREMENT":
            return { count: state.count - 1 }

        default:
            return state
    }
}

export const store = createStore(counterReducer)