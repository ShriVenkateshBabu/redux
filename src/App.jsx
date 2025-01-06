import React from 'react'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddpostForm'
const App = () => {
  return (
  <main>
    <AddPostForm/>
     <PostsList/>
  </main>
  )
}

export default App