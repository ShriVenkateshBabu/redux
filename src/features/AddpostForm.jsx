import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid  } from "@reduxjs/toolkit";
import { postAdded } from "./posts/postsSlice";
const AddPostForm = () => {
  const dispatch = useDispatch()
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
    if(post.content && post.title){
      dispatch(postAdded(title,content))
    setPost({ title: "", content: "" }); 
   };
  }
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
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          placeholder="Enter the content"
          name="content"
          value={post.content}
          onChange={handleInputChange}
        />
        <button type="submit">Add Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
