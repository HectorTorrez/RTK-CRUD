import { useDispatch, useSelector } from "react-redux"
import { deleteTasks } from "../features/tasks/taskSlice"

export const TaskList = () => {

  const tasks = useSelector((state )=> state.tasks)

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTasks(id))
  }

  return(
    <>
      {

      tasks.map(task => {
        return (
            <section key={task.id}>
              <p>{task.title}</p>
              <button onClick={()=> handleDelete(task.id)}>Delete</button>
            </section>
        )
      })
      }
    </>
  )
}