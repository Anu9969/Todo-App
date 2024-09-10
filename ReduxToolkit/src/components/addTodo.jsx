// import React, { useState } from "react";
// import { addTodo } from "../features/todo/todoSlice";
// import {useDispatch} from 'react-redux';

// function AddTodo() {
//     const [input , setInput] = useState(''); 
//     const dispatch = useDispatch();
//      //value bhejne ke liye
//     //dispatch reducers ko use krke store m value add krta h 

//     const addTodoHandler = (e) => {
//         e.preventDefault();
//         dispatch(addTodo(input));
//         setInput('');//input ko empty krne ke liye
//     } 
//   return (
//     <div>
//       <input type="text" />
//       <button>Add Todo</button>
//     </div>
//   );
// }

// function TodoItem({ todo }) {
    

//     return (
//         <div
//             className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
//                 todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
//             }`}
//         >
//             <input
//                 type="checkbox"
//                 className="cursor-pointer"
//                 checked={todo.completed}
//                 onChange={toggleCompleted}
//             />
//             <input
//                 type="text"
//                 className={`border outline-none w-full bg-transparent rounded-lg ${
//                     isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//                 } ${todo.completed ? "line-through" : ""}`}
//                 value={todoMsg}
//                 onChange={(e) => setTodoMsg(e.target.value)}
//                 readOnly={!isTodoEditable}
//             />
//             <button
//         type="submit"
//         className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//       >
//         Add Todo
//       </button>
//             <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//                 onClick={() => {
//                     if (todo.completed) return;

//                     if (isTodoEditable) {
//                         editTodo();
//                     } else setIsTodoEditable((prev) => !prev);
//                 }}
//                 disabled={todo.completed}
//             >
//                 {isTodoEditable ? "📁" : "✏️"}
//             </button>
//             {/* Delete Todo Button */}
//             <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//                 onClick={() => deleteTodo(todo.id)}
//             >
//                 ❌
//             </button>
//         </div>
//     );
// }

// export default TodoItem;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, toggleCompleted, updateTodo, removeTodo } from "../features/todo/todoSlice";

// AddTodo Component
const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput("");
        }
    };

    return (
        <div className="flex items-center justify-center mt-6">
            <form onSubmit={handleAddTodo} className="flex gap-2">
                <input
                    type="text"
                    className="border rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter a todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg shadow-md"
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
};

// TodoItem Component
const TodoItem = ({ todo }) => {
    const [todoMsg, setTodoMsg] = useState(todo.text);
    const [isEditable, setIsEditable] = useState(false);
    const dispatch = useDispatch();

    const handleEditTodo = () => {
        if (isEditable) {
            dispatch(updateTodo({ id: todo.id, text: todoMsg }));
        }
        setIsEditable(!isEditable);
    };

    return (
        <div
            className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => dispatch(toggleCompleted(todo.id))}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={handleEditTodo}
                disabled={todo.completed}
            >
                {isEditable ? "📁" : "✏️"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeTodo(todo.id))}
            >
                ❌
            </button>
        </div>
    );
};

// For example, default export AddTodo
export { AddTodo, TodoItem };
export default AddTodo;


