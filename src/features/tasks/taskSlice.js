import { createSlice  } from "@reduxjs/toolkit";


const initialState = [
    // {
    //     id: crypto.randomUUID(),
    //     title: 'First task',
    //     done: false,
    // },
    // {
    //     id: crypto.randomUUID(),
    //     title: 'Second task',
    //     done: false,
    // },
]


export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTasks: (state, action) => {
           state.push(action.payload)
        },

        editTasks: (state, action) => {
            const {title, id, done} = action.payload
           const foundTask = state.find(task => task.id === id)
           if(foundTask){
            foundTask.title = title
            foundTask.done = done
           }
        },

        deleteTasks: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        }

    }
})


export const {addTasks, deleteTasks, editTasks} = taskSlice.actions