import { configureStore } from '@reduxjs/toolkit'
import componentReducer from './features/components/componentSlice'

export default configureStore({
    reducer: {
        component: componentReducer,
    },
})
