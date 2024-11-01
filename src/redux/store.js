
import {configureStore} from '@reduxjs/toolkit'
import loginReducers from './loginReducers'
 


export const store =configureStore({
    reducer:{
        Login:loginReducers
    }
})

export default store