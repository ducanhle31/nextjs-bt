
export const getPosts = async ({page})=>{
    const res= await fetch("https://dummyjson.com/posts");
    const json = await res.json();
    return json;
}



