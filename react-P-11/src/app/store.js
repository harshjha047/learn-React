import{configureStore} from "@reduxjs/toolkit"
import todoReducer from '../Features/TodoSlice'
export  const store = configureStore({
    reducer:todoReducer
})