import Todos from "./components/Todos";
import {AddTodo } from "./components/addTodo";


function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-4">
      <h1 className="text-3xl font-bold text-white mb-4">My Todo App</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
