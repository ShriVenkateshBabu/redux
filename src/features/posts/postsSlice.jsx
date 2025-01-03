import { createSlice } from "@reduxjs/toolkit";
const initialState = [{
 id:1,
 title:'post1',
 content:"hello i am post 1" 
}]
const postsSlice = createSlice({
   name:"posts",
   initialState,
   reducers:{
       postAdded(state,action){
           state.push(action.payload) // due immer library
       }
   }
})
export const selectallpost = (state) => state.posts;
export const {postAdded} = postsSlice.actions
export default postsSlice.reducer