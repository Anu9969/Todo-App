import { createSlice ,nanoid } from "@reduxjs/toolkit";

//store starting m kaisa dikhega
// const initialState = {
//     todos: [{id:1 , text: "I will keep moving forward"}]
// }//pehla todo

const initialState = {
    todos: [{ id: 1, text: "I will keep moving forward", completed: false }]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state , action) => { 
            const todo ={
                id: nanoid(),  //date().now bhi use kr skte h
                text: action.payload,  //payload ek object
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        },
        toggleCompleted: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;