import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import { colorFromId } from './colors2.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    const posts1 = await fetch('https://dummyjson.com/posts?limit=100&skip=0');
    const data = await posts1.json();
    try {
      setPosts(data.posts);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <PostList posts={posts} loading={loading} />
            } />
            <Route path="/post/:id" element={
              <PostDetail posts={posts} loading={loading} />
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
