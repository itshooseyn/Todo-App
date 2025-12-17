import React, { useEffect, useState } from "react";
import "./Todos.css";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


export default function Todos() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [lastID, setLastID] = useState(0)

  const addTodo = () => {
    setLastID(prev => prev + 1)
    const newTodo = {
      id: lastID,
      title: todo
    }
    setTodoList([...todoList, newTodo]);
    setTodo('')
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id != id))
  }

  //edit Todo function
  const editTodo = (title) => {
    const foundIndex = todoList.findIndex(todo => todo.title === title);
    const newValue = prompt("write new value : ")

    setTodoList(prev => prev.map((item, index) =>
      index === foundIndex ? { ...item, title: newValue } : item
    ));
  }



  return (
    <>
      <section className=" w-50 mx-auto mt-5 d-flex justify-content-center">
        <input type="text" className="p-3 col-7 rounded-3 border-0 text-center fs-3" id="Todo-input" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <div className="rounded-3 icons d-flex align-items-center justify-content-center mx-3" onClick={addTodo} >
          <FaPen className="fs-5" />
        </div>
      </section>

      <section className=" w-50 mx-auto mt-5 d-flex justify-content-start align-items-center flex-column shadow rounded-5" id="Todo-container" >
        {todoList.map((item) => {
          return (
            <div className="todo-card  d-flex align-items-center justify-content-between p-3 px-5 mt-3  rounded-3  w-75" key={item.id} >
              <span className="fs-4">{item.title}</span>
              <div className="d-flex">
                <button className="rounded-3 todo-icon d-flex align-items-center justify-content-center me-5 bg-transparent border-0" onClick={() => deleteTodo(item.id)}>
                  <MdDelete className="fs-2 text-danger" />
                </button>
                <button className="rounded-3 todo-icon d-flex align-items-center justify-content-center me-5 bg-transparent border-0" onClick={() => editTodo(item.title)}>
                  <FaEdit className="fs-2 text-success" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
