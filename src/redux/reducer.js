const INCREMENT = "INCREMENT";
const RESET = "RESET";

// Action creators
export const increment = () => ({
    type: INCREMENT,
})

export const reset = () => ({
    type: RESET
})

// Initial state
const initialState = {
    counter:0,
    weigth:0,
    max:0,
    bar:0,
}


// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1 && 1,
                weigth: state.weigth + 30 && 30,
                max: state.max + 45 && 67,
                bar: state.bar + 0.5 && 0.5,
            }

        case RESET:
            return {
                ...state,
                counter: 0,
                weigth:  0,
                max:  0,
                bar: 0,
            }
        default:
            return state
    }
}

export default rootReducer