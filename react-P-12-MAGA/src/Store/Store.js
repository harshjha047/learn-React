import { configureStore } from '@reduxjs/toolkit'
import AuthStore from './AuthStore';

// const store = configureStore({reducer:{auth: AuthStore },});
const store = configureStore({reducer:{auth: AuthStore },});

export default store;