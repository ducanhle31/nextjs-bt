
"use client";
import {useEffect ,useState } from "react";

export default function Counter(){
    const [count, setCount]= useState<number>(0);

    const[data, setData]= useState([])
    const [page,setPage]=useState(1)
    useEffect (() =>{
      const fetchData = async()=>{
        try{const res=await fetch (`https://dummyjson.com/posts/?page=${page}?per_page=2`)
      const json = await res.json()
      setData(json.data)
      }catch(error
      ){console.log(error)}
      }
      fetchData()
    },[])
    return (  <div>
  
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>)
}