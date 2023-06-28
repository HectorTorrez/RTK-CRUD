import {configureStore } from '@reduxjs/toolkit'
import { taskSlice } from '../features/tasks/taskSlice'
import { loadState, saveState } from '../helpers/loadState'

const persitedState = loadState()
export const store = configureStore({
    reducer:{
        tasks: taskSlice.reducer
    },
    preloadedState: persitedState
})


store.subscribe(() => {
    saveState(store.getState());
  });
