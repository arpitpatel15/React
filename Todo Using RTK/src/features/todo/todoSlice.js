import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1,text:'Hello world'}],
    
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState ,
    reducers : {
        addTodo  : (state,action) => {
            const todo = {
                id:nanoid(),text:action.payload
            }
            state.todos.push(todo)
        },//state variable gives an access of the initial todo's array and action gives the id to change in the todo's array
        removeTodo  :(state,action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo : (state,action) =>{
            const {id,text} = action.payload
            const update = state.todos.find((todo) => todo.id === id)
            if (update){
                update.text = text
            } 
        }
    }
})

export const {addTodo,updateTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer