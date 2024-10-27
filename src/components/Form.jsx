import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodos } from '../store/TodoSlice'

function Form() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const [inputValue,setInputValue] = useState('')
  

  function handleSubmit(e){
    e.preventDefault()
    const data = {
      id:todos.length? todos.length + 1 : 1,
      value:e.target.todo.value
    }
    dispatch(createTodos(data))
    e.target.reset()
  }
  return (
    <form autoComplete='off' className='w-[50%] mx-auto mt-[20px] p-5 bg-white rounded-[10px]' onSubmit={handleSubmit}>
      <h2 className="text-[35px] font-semibold text-violet-600 text-center">Todo</h2>
      <div className='w-full flex justify-between'>
      <input type="text" name='todo'   placeholder='Typing...'  className="w-[72%] p-[12px] outline-none border-[2px] border-violet-300 rounded-[12px] text-violet-400 focus:border-violet-500 focus:shadow-lg" />
      <button type='submit' className="w-[27.5%] py-[12px] bg-violet-500 rounded-[12px] border-[1px] border-transparent text-white font-semibold hover:border-violet-600 hover:text-violet-600 hover:bg-transparent transition-400 transition">Add</button>
      </div>
    </form>
  )
}

export default Form