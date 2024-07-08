import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    loading:null,
    role:null,
    error:null,
    userName:null
}

export const signUp = createAsyncThunk("/signup", async(formData,{rejectWithValue})=>{
    try{
        const data = await axios.post(`${import.meta.env.VITE_API_URL}/signup`,
            ...formData
        )
        return data
    }
    catch(error){
        rejectWithValue(error)
    }
})

const signupSlice = createSlice({
    name:"signup",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder.addCase(signUp.pending,(state)=>{
            state.loading = true

        }).addCase(signUp.fulfilled,(state,action)=>{
            state.loading = false
            console.log(action.payload)

        }).addCase(signUp.rejected,(state,action)=>{
            state.loading = false
           console.log(action.payload)
        })
    }

})

export default signupSlice.reducer