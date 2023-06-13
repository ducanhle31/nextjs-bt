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