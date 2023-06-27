import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTasks } from "../features/tasks/taskSlice"

export const FormTask = () => {

  const [task, setTask] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTasks(
      {
        title: task,
        id: crypto.randomUUID(),
        done: false
      }
    ))
    setTask('')
  }

  
  return(
    <form onSubmit={handleSubmit} >
      <label htmlFor="title">
        <input onChange={handleChange} type="text" name="title" value={task} placeholder="Add task" />
      </label>
      <button type="submit">Add task</button>
    </form>
  )
}