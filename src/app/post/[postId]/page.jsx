import './postid.css';

import { getPostById } from "@/services/product.service";
export default async function PostDetail(
  {params:{postId}}) {
   const data = await getPostById({postId}); 

  return (
    <main>
    <form className="form">
  <span className="title">{data.title}.</span>
  <p className="description">{data.body}</p>
  
</form>
    </main>
  )
}
