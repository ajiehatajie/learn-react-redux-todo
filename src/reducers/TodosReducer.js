import { Todo } from '../contants/ActionTypes';


const adding = (payload) => ({
    id: Math.random(),
    text:payload.text
})

const delTodo = (state,id) => {
    return state.filter( e => e.id !== id ) 
}


const Todos = (state = [],payload ) => {
        let task = null
    switch (payload.type) {
        case Todo.ADD_TODO:
          task =  [...state,adding(payload)]
          return task
        case Todo.REMOVE_TODO:
          return delTodo(state,payload.id)
        case Todo.CLEAR_TODOS:
          return state = []
        default:
            return state
    }


}


export default Todos