import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = []
const postsSlice = createSlice({
   name:"posts",
   initialState,
   reducers:{
       postAdded:{
        reducer(state,action){
            const id = state.length ?state[state.length-1].id +1:1;
           state.push({id,...action.payload}) // due immer library
       },prepare(title,content){
        return{
            payload:{
                title,
                content}} 
        }
       }
   }
})
export const selectallpost = (state) => state.posts;
export const {postAdded} = postsSlice.actions
export default postsSlice.reducer