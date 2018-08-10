import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO
} from '../actions'


function todos (state = {}, action) {
    const id = Math.random().toString(36).substr(2, 9)
    switch(action.type) {
        case ADD_TODO:
            return{ 
                ...state,
                [id]: {
                    id: id,
                    title: action.title,
                    description: '',
                    complete: false
                }
            }
        case DELETE_TODO:
            const {[action.id]: value, ...remaining} = state
            return{
                ...remaining
            }
        case COMPLETE_TODO:
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    complete: true
                }
            }
        default:
            return state
    }
}

export default todos