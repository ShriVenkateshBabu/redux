import {useSelector,useDispatch} from "react-redux"
import { selectallpost } from "./postsSlice"
const PostsList = () => {
  const posts = useSelector(selectallpost)
  console.log(posts,"hello")
  const renderedPost = posts.map((post)=>
  <article key={post.id}>
   <h3>{post.title}</h3>
   <p>{post.content.substring(0,30)}</p> 
  </article>
  )
  return (
    <div>
     <section>
      <h2>posts</h2>
      {renderedPost}
     </section>
    </div>
  )
}

export default PostsList