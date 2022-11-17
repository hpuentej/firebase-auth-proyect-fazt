import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/taskSlice'

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
})

// store.subscribe(() => console.log(store))

export default store