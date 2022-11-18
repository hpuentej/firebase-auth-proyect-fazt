import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/taskSlice'
import counterReducer from '../features/counter/counterSlice'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    counter: counterReducer,
  }
})

// store.subscribe(() => console.log(store))

export default store