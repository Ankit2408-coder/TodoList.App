import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      setTodos(JSON.parse(todoString));
    }
  }, []);

  // Save to localStorage
  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo("");
  };

  const handleEdit = (e, id) => {
    const t = todos.find(i => i.id === id);
    setTodo(t.todo);
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  const handleDelete = (e, id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const newTodos = todos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  // Save todos whenever it changes
  useEffect(() => {
    saveToLS();
  }, [todos]);

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-green-300 min-h-[80vh] md:w-[35%]">
        <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>

        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-2xl font-bold'>Add a Todo</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" placeholder='add todos' className='w-full border-2 border-black rounded-full px-5 py-1' />
            <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-green-700 mx-2 rounded-full hover:bg-green-400 disabled:bg-yellow-500 p-4 py-2 text-sm font-bold text-white'>Save</button>
          </div>
        </div>

        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
        <label className='mx-2' htmlFor="show">Show Finished</label>

        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>

        <h2 className='text-2xl font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to display</div>}

          {todos.map(item =>
            (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex my-3 justify-between">
                <div className='flex gap-5'>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={(e) => handleEdit(e, item.id)} className='bg-green-600 hover:bg-green-500 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaEdit /></button>
                  <button onClick={(e) => handleDelete(e, item.id)} className='bg-green-600 hover:bg-green-500 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><AiFillDelete /></button>

                </div>
              </div>
            )
          )}
        </div>
      </div>
          <Footer/>
    </>
  );
}

export default App;
