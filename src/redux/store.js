import { createStore } from '@reduxjs/toolkit';
import { appReducer } from "./appRedux"

////Viene del reducer
const store = createStore(appReducer)
export default store;