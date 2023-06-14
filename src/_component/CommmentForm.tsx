"use client";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import {useForm} from "react-hook-form";
interface CommentFormValues{
    body:string;
}
export default function CommentForm({postId}:{postId:number|string}){
    const {
        register,
        handleSubmit,
        formState:{errors},
    }= useForm<CommentFormValues>();
    const router = useRouter();
    const addComment =useMutation({
    mutationFn: async(data: CommentFormValues)=>{
        return await fetch(`https://dummyjson.com/comments/add`,
            {method:"POST",
            headers:{"Content-Type":"application/json",},
            body: JSON.stringify({
                body:data.body,
                postId,
                userId:1,
            }),});
        },
        onSuccess:(data)=>{
router.refresh();
        },
    });
    const onSubmit = (values:CommentFormValues)=>{
        addComment.mutate(values);
    };
    return <form className="commentform" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <textarea className="textarea" cols={30} rows={10} {...register("body", {
            required:{
                value:true,
                message:"Please enter a comment",
            },
        })}></textarea>
        {errors.body && <p>{errors.body.message}</p>}</div>
        <button>Comment</button>
    </form>
}