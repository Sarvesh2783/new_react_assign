import { useState } from 'react';
import { Link } from 'react-router-dom';
import { colorFromId } from '../colors2.js';
import './PostList.css';

function PostList({ posts, loading }) {
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState({});
  const perPage = 10;

  const lastIdx = page * perPage;
  const firstIdx = lastIdx - perPage;
  const currPosts = posts.slice(firstIdx, lastIdx);
  const totalPages = Math.ceil(posts.length / perPage);

  const toggle = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) {
    return <div className="loading">Loading posts... Have some patience!!</div>;
  }

  return (
    <div className="posts-container">
      <h1 className="posts-title">Posts</h1>
      <div className="post-grid">
        {currPosts.map((post) => (
          <div className="post-card" key={post.id} style={{ backgroundColor: colorFromId(post.id) }}>
            <h2 className="post-title">{post.title}</h2>
            <div className="post-content">
              <p className={expanded[post.id] ? 'expanded' : 'collapsed'}>
                {post.body}
              </p>
              {post.body.length > 100 && (
                <button 
                  className="show-more-btn"
                  onClick={() => toggle(post.id)}
                >
                  {expanded[post.id] ? 'Show Less' : 'Show More'}
                </button>
              )}
            </div>
            <div className="post-tags">
              {post.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <Link to={`/post/${post.id}`} className="view-details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
      
      <div className="pagination">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        <span className="page-info">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PostList; 