import { createSlice} from "@reduxjs/toolkit"

const initialState = {
    todos:[]
}

const TodoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers:{
        createTodos:(state,action) => {
            if(action.payload.value !== ""){
                return{
                    todos:[...state.todos,action.payload]
                }
            }
        },
        deleteTodos:(state,action) => {
            const filteredData = state.todos.filter((item) => item.id != action.payload)
            return{
                todos:filteredData
            }
        },
        updateTodos: (state, action) => {
            state.todos = state.todos.map(todo => 
                todo.id === action.payload.id ? { ...todo, value: action.payload.value } : todo
            );
            return state; 
        }
    }
})


export const {createTodos,deleteTodos,updateTodos} = TodoSlice.actions
export default TodoSlice.reducer