interface GetProductsPayload{page:number;}

export const getProducts = async ({page}:GetProductsPayload)=>{
    const res= await fetch("https://dummyjson.com/products");
    const json = await res.json();
    return json;
}
interface GetProductByIdPayload{
    productId:number| string;

}
export const getProductById= async({productId}:GetProductByIdPayload)=>{const res= await fetch(`https://dummyjson.com/products/${productId}`);
    const json = await res.json();
    return json;}


interface GetPostByIdPayload{
    postId:number| string;

}
    export const getPostById= async({postId}:GetPostByIdPayload)=>{const res= await fetch(`https://dummyjson.com/posts/${postId}`);
    const json = await res.json();
    return json;}


    
    export interface Comment{
        id:number;
        body:string;
        postId:number;
        user:{
            id:number;
            username:string;
        };
    }
    interface GetPostCommentsPayload{
        postId:number|string;
    }
    interface GetPostCommentsSucceeded{
        comments:Comment[];
        total:number;
        skip:number;
        limit:number;
    }
        export const getPostComments= async({postId}:GetPostCommentsPayload)=>{const res= await fetch(`https://dummyjson.com/posts/${postId}/comments`);
    const json = (await res.json()) as GetPostCommentsSucceeded;
    return json;}



    

interface GetUserPayload{userId:number;}
export interface User {
     id: number,
      firstName: string,
      lastName: string,
image: string;
    
}
export const getUserById= async({userId}:GetUserPayload)=>{const res= await fetch("https://dummyjson.com/users/"+ userId);
    const json = (await res.json())as User;
    return json;}


