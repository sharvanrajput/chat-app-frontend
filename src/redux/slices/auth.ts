import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
    _id: string,
    email: string,
    name: string,
}

interface initialS {
    user: User | null,
    isAdmin: boolean
}



const initialState: initialS = {
    user: null,
    isAdmin: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userExist: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },

        userNotExist: (state) => {
            state.user = null
            state.isAdmin = false
        },
        setAdmin: (state) => {
            state.isAdmin = true
        }
    }
})


export const { userExist, userNotExist, setAdmin } = authSlice.actions
export default authSlice
