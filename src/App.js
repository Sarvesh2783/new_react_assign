import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import {colorFromId} from './colors2.js'
function App() {
  const [posts,setposts]=useState([]);
  const [loading,setloading]=useState(true);
  async function fetchData(){
    const posts1=await fetch('https://dummyjson.com/posts?limit=10&skip=0');
    const data=await posts1.json();
    try{
     setposts(data.posts);
    }
    catch(err){
      console.log(err);
    }
    finally{
      setloading(false);
    }
    }
    useEffect(() => {
      fetchData();
    }, []);  
  return (
    <div className="App">
    <h1 style={{fontsize:'20px'}}>React Assignment</h1>
    <h2> Posts</h2>
    { loading? (
      <p>Loading posts...Have some patience!!</p>
    ) : (
      <div className="post-container">
        {posts.map((post) => (
  <div className="post-card" key={post.id} style={{backgroundColor:colorFromId(post.id)}}>
    <h2 style={{fontStyle:'oblique'}}>{post.title}</h2>
    <p>{post.body}</p>
    <p style={{color:'brown'}}>Tags: {post.tags.join(', ')}</p>
    <p style={{color:"red"}}>Reactions: Likes: {post.reactions.likes}, Dislikes: {post.reactions.dislikes}</p>
  </div>
))}
      </div>
    )}
  </div>
  );
}
export default App;
