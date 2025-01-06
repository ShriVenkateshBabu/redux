import { useSelector } from "react-redux"
import { Allusers } from "../users/usersSlice"
const PostAuthor = ({userid}) => {
    const users = useSelector(Allusers)
    const author = users.find((user)=>user.id===parseInt(userid))
    // console.log(author)
    return (
    <span>
        by ----{author ? author.name : "UnKnown Author"}
    </span>
  )
}

export default PostAuthor