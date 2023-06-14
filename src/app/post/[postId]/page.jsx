import './postid.css';
import Comment from '@/_component/Comment';
import CommentForm from '@/_component/CommmentForm';
import { getPostById,getPostComments, getUserById} from "@/_services/product.service";
export default async function PostDetail(
  {params:{postId}}) {
   const data = await getPostById({postId}); 

const commentsData= await getPostComments({postId});
const users= await Promise.all( commentsData.comments.map((comment)=>getUserById({userId:comment.user.id})));

  return (
    <main>
    <form className="form">
  <span className="title">{data.title}.</span>
  <p className="description">{data.body}</p>
  
</form>
<div>
<h2>Comments</h2>
{commentsData.comments.map((comment)=>
({
  ...comment,
  user: users.find((user)=> user.id == comment.user.id ),
})).map((comment)=>(
  <Comment key={comment.id} comment={comment} />
  
))}
<CommentForm postId={postId} />
</div>
    </main>
  )
}
