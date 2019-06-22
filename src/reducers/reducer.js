export default (state = [], action = {}) => {
    switch (action.type) {
        case "ADD_MODEL":
            console.log("STATE BEFORE", state)
            return [...state, { ...action.payload }]
        default:
            return state
    }
}