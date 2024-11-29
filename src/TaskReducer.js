export const inicialState = {
    tasks: []
}


export const tackReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, { texte: action.playload, completed: false }]
            }
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task, index) => {
                    return index === action.playload ? { ...task, completed: !task.completed } : task
                })
            }
        case 'REMOVE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((_, index) => {
                    return index !== action.playload
                })
            }
        default:
            return state
    }
}