import { createSlice } from "@reduxjs/toolkit";

const initialState =[{
    id:1,name:"hari"
},
{id:2,name:"Venky"}
]
const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})

export const Allusers = (state) =>state.users
export default userSlice.reducer