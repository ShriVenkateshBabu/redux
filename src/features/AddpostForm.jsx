import React, { useState } from "react";

const AddPostForm = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((currentPost) => ({
      ...currentPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assign a unique id to the post at the time of submission
    const newPost = {
      ...post,
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    };

    setPosts((currentPosts) => [...currentPosts, newPost]);
    setPost({ title: "", content: "" }); // Clear the form after submission
  };

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
      <section>
        <h3>Posts</h3>
        {posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default AddPostForm;
