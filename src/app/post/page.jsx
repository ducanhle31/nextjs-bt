/* 
import './post.css';
import Link from 'next/link';
import { getPosts } from "@/services/post.service";
export default async function Posts() {
  const data = await getPosts({page:1});
  return (
    <main>
     <h1> Bài viết </h1>
  <div className="list">

{data.posts.map((post)=>(
  

<div className="card"  key={post.id} >
    <h3 className="card__title">#{post.userId}  </h3>
    <p className="card__content">{post.title}</p>
    <div className="card__date">  April 15, 2022</div>

        <Link className="card__arrow" href={`/post/${post.id}`}> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
        </svg>
         </Link>

</div>

))}

    </div>
    </main>
  )
}
 */
"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import './post.css';
const App = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setItems(data.posts));
  }, []);

  return (
    <div className="App">
      <div className="container">
        {items.slice(0, visible).map((item) => (
          <div className="card" key={item.id}>
  <div className="img"></div>
  <div className="textBox">
    <div className="textContent">
      <p className="h1">#{item.userId}</p>
      <span className="span">12 min ago</span>
    </div>
    
        <Link  href={`/post/${item.id}`}><p className="p">{item.title}</p></Link>
</div>
</div>
        ))}
        <button onClick={showMoreItems}>Load more</button>
      </div>
    </div>
  );
};

export default App;
