import {useSelector,useDispatch} from "react-redux"
import { selectallpost } from "./postsSlice"
import PostAuthor from "./PostAuthor"
const PostsList = () => {
  const posts = useSelector(selectallpost)
  const renderedPost = posts.map((post)=>
  <article key={post.id}>
   <h3>{post.title}</h3>
   <p>{post.content.substring(0,30)}</p> 
   <p className="postCredit"><PostAuthor userid={post.userid}/></p>
   <p>{post.date}</p>
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