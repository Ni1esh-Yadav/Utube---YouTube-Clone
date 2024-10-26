import { createSlice} from '@reduxjs/toolkit';

export const utube = createSlice({
    name:'youtube',
    initialState : {
        close: true,
    },
    reducers:{
        hide: (state) => {state.close = !(state.close)},
        open:(state) => {state.close = false}
    }
})

export const {hide,open} = utube.actions
export default utube.reducer
