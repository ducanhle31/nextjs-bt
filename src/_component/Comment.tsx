
import { Comment } from "../_services/product.service";
import { User } from "../_services/product.service";

interface CommentProps{
    comment: Comment &{
        user:User;
    };
}
export default function Comment({comment}:CommentProps){
    
    return(
        <div className="comment">
            <div style={{display:"flex", alignItems:"center"}}>
    <img src={comment.user.image} alt={comment.user.firstName} width={50} height={50} />
  <h3>{comment.user.firstName} {comment.user.lastName}</h3>
            </div>
        
  <p>{comment.body}</p>
</div>
    )
}