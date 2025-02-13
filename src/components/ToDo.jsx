import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png"
import TodoItems from "./TodoItems";

const ToDo = () => {
    const[todoList,setTodoList]=useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[])
    const inputRef = useRef()
    const add =()=>{
        const inputText=inputRef.current.value;
        if (inputText===""){
            return null;
            
        }
      const newToDo = {
        id:Date.now(),
        text:inputText,
        isComplete: false,
      }
      setTodoList((prev)=>[...prev,newToDo])
      inputRef.current.value=""
    }
    const deleteTodo =(id)=>{
        setTodoList((prvTodos)=>{
           return prvTodos.filter((todo)=> todo.id !== id)
        })
    }
    const toggle = (id)=>{
        setTodoList((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if(todo.id === id ){
                    return {...todo,isComplete:!todo.isComplete}
                }
                return todo
            })
        })
    }
 
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todoList))
    },[todoList])
    return (
        <div className="bg-white place-self-center w-11/12 flex flex-col p-7 max-w-md min-h-[500px] rounded-xl">
            {/**--------title------- */}
            <div className="flex items-center mt-7 gap-2">
                <img src={todo_icon} alt="" className="w-8" />
                <h1 className="text-3xl font-semibold">To-Do List</h1>
            </div>
            {/**-------input box------- */}
            <div className="flex items-center my-7 bg-gray-200 rounded-full">
                <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add Your Task" />
                <button onClick={add} className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">ADD +</button>
            </div>
             {/**-------to do list------- */}
             <div>
                {todoList.map((item,index)=><TodoItems 
                key={index} 
                text={item.text} 
                id={item.id} 
                isComplete={item.isComplete} 
                deleteTodo={deleteTodo}
                toggle={toggle}>

                </TodoItems>)}
             </div>
        </div>
    );
};

export default ToDo;