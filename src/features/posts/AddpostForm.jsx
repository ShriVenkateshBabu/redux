import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { Allusers } from "../users/usersSlice";
const AddPostForm = () => {
  const dispatch = useDispatch()
  const users = useSelector(Allusers)
  const [userid,SetUserId] = useState("")
  const [post, setPost] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const {name,value} = e.target
    setPost((preval)=>(
        {...preval,
          [name]:value} 
    )  
) 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
     const {title,content} = post
    //  console.log(userid,"selecteduserid")
    if(post.content && post.title && userid){
      dispatch(postAdded(title,content,userid))
      setPost({ title: "", content: "" }); 
      SetUserId("")
   }
   else{
    alert("pls fill all columns")
   };
  }
  const savepostbtn = Boolean(post.title) && Boolean(post.content) && Boolean(userid)
  const userOptions = users.map((user)=>
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    )
    // console.log(users.map(user=>console.log(user.id,"hello")))
  
  return (
    <section>
      <h2>ADD POST</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          placeholder="Enter the title"
          name="title"
          value={post.title}
          onChange={handleInputChange}
        />
        <label htmlFor="userid">Add Author</label>
        <label htmlFor="PostAuthor"> Users</label>
        <select id="PostAuthor"  value={userid} onChange={(e)=>SetUserId(e.target.value)}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          placeholder="Enter the content"
          name="content"
          value={post.content}
          onChange={handleInputChange}
        />
        <button type="submit"
        disabled ={!savepostbtn}
        >Add Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
