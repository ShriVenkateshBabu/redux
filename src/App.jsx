import React from 'react'
import PostsList from './features/posts/PostsList'
import AddpostForm from './features/AddpostForm'
const App = () => {
  return (
  <main>
    <AddpostForm/>
     <PostsList/>
  </main>
  )
}

export default App