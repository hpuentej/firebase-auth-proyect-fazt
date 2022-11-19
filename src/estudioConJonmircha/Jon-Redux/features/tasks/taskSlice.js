import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
]

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    value: initialState,
  },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload)
    },
    deleteTask: (state, action) => { // action.payload = id, state.value = array of tasks
      const [taskFound] = state.value.filter(task => task.id === action.payload)
      if(taskFound) {
        const index = state.value.indexOf(taskFound)
        state.value.splice( index,1)
        // state.value = state.value.filter((task) => task.id !== action.payload)
      }
    },
    editTask: (state, action) => {
      const [taskFound] = state.value.filter((task) => task.id === action.payload.id)
      const index = state.value.indexOf(taskFound)
      const taskEdited = {...(action.payload)}
      state.value.splice(index,1,taskEdited)

      console.log(action.payload)
      
    }
  }
})

export const { addTask, editTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer;










// const [taskFound] = state.value.filter(task => task.id === action.payload.id)