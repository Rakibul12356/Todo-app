import React from 'react';
import tick from "../assets/tick.png"
import not_tick from"../assets/not_tick.png"
import delet from"../assets/delete.png"
const TodoItems = ({text,id,deleteTodo}) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div className='flex flex-1 items-center cursor-pointer '>
                <img src={tick} alt="" className='w-7' />
                <p className='text-slate-700 ml-4 tet-[17px'> {text}</p>
            </div>
            <img onClick={()=>{deleteTodo(id)}} src={delet} alt="" className='w-3.5 cursor-pointer' />
        </div>
        
    );
};

export default TodoItems;