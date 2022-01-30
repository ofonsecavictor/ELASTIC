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
    counter: 0,

}


// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter = 1,
                weigth: state.counter = 55,
                max: state.counter = 80,
            }

        case RESET:
            return {
                ...state,
                counter: 0,
                weigth: state.counter = 0,
                max: state.counter = 0,
            }
        default:
            return state
    }
}

export default rootReducer