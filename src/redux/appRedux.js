////Constants
const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const DELETE_TODO = "DELETE_TODO";
const SET_PAGE_NAME ="SET_PAGE_NAME";

////State Inicial
const stateInitial = {
    pageTitle: '',
    todo: [],
}


////Selector
export const appSelector = {
    todo: (state) => state.todo,
    pageTitle: (state)=> state.pageTitle,
}



////Actions
export const appActions = {
    setPageName: (title) => ({
        type: SET_PAGE_NAME,
        title,
    }),
    addTodo: (payload) => ({
      type: ADD_TODO,
      payload,
    }),
    setCompletedTodo: (payload) => ({
      type: COMPLETE_TODO,
      payload,
    }),
    deleteTodo: (id) => ({
      type: DELETE_TODO,
      id,
    })
}

////Reducer-exporta a store 
export const appReducer = (state = stateInitial, action) => {
    switch(action.type){
        case SET_PAGE_NAME:
            return{
                ...state,
                pageTitle: action.title
              
            }
        case ADD_TODO:
            return{
                ...state,
                todo: 
                [...state.todo,
                    {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                    }
                ]
            }
        case COMPLETE_TODO:
            return {
                ...state,
                todo: state.todo.map((t) => {
                    if (t.id === action.payload.id) {
                        return {
                            ...t,
                            completed: action.payload.completed
                        }   
                    }
                    return t
                
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(t => t.id !== action.id)
                }
            default:
            return state;
    }
}