import { Todo } from "../contants/ActionTypes";



let actions  =  {
    addTodo: payload => {
       return { type:Todo.ADD_TODO,
        text:payload }
    },
    removeTodo: id => {
       return {  type:Todo.REMOVE_TODO,
        id }
    },
    clearTodo: () => {
        return { type:Todo.CLEAR_TODOS }
    }
}


export default actions