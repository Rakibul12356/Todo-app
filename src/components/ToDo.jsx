import { useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png"
import TodoItems from "./TodoItems";

const ToDo = () => {
    const[datas,setDatas]=useState([])
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
      setDatas((prev)=>[...prev,newToDo])
      inputRef.current.value=""
    }
    const deleteTodo =(id)=>{
        setDatas((prvTodos)=>{
           return prvTodos.filter((todo)=> todo.id !== id)
        })
    }

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
                {datas.map((item,index)=><TodoItems 
                key={index} 
                text={item.text} 
                id={item.id} 
                isComplete={item.isComplete} 
                deleteTodo={deleteTodo}>
                    
                </TodoItems>)}
             </div>
        </div>
    );
};

export default ToDo;