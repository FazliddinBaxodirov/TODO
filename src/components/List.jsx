import React, { useState } from 'react'
import {deleteTodos, updateTodos} from '../store/TodoSlice'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'

function List() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [isOpen,setIsOpen] = useState(false)
    const [editId,setEditId] = useState(0)
    const [newValue,setNewValue] = useState("")

    function deleteTodo(id){
        dispatch(deleteTodos(id))
    }
    function update(id){
        setIsOpen(true)
        setEditId(id)
        const updateFind = todos.find(item => item.id === id)
        setNewValue(updateFind.value)
    }
    function handleUpdate(e){
        e.preventDefault()
        dispatch(updateTodos({id:editId,value:newValue}))
        setIsOpen(false)
    }
    

  return (
    <div className="list w-[50%] mx-auto mt-[10px] p-5 flex flex-col gap-3 bg-white rounded-[10px]">
       {todos.map(item => (
        <div key={item.id} className='w-full px-[5px] py-[10px] rounded-md bg-violet-400 flex justify-between items-center '>
         <div className='flex text-white text-[20px]'>
                <p>{item.value}</p>
            </div>
            <div className='flex gap-[5px]'>
                <input type='checkbox'/>
                <button onClick={() => update(item.id)} className='p-3 bg-green-500 rounded-[12px] text-white font-medium'>Update</button>
                <button onClick={() => deleteTodo(item.id)} type='button' className='p-3 bg-red-500 rounded-[12px] text-white font-medium'>Delete</button>
            </div>
        </div>
       ))}
       <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleUpdate} className='flex flex-col gap-[10px] p-2'>
            <h3 className='mx-auto text-[35px] text-violet-600'>Update your Todo</h3>
            <input className='w-full p-3 py-[5px] border-[2px] outline-none rounded-md focus:border-violet-700 focus:shadow-md' type="text" value={newValue || ''} onChange={(e) => setNewValue(e.target.value)} name='updateInput' />
            <button type='submit' className='w-full p-[5px] py-[6px] bg-violet-600 text-white rounded-md '>Update</button>
        </form>
    </Modal>
    </div>
  )
}

export default List
