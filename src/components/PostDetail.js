import { useParams, Link } from 'react-router-dom';
import { colorFromId } from '../colors2.js';
import './PostDetail.css';

function PostDetail({ posts, loading }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (loading) {
    return <div className="loading">Loading post details... Have some patience!!</div>;
  }

  if (!post) {
    return (
      <div className="error-container">
        <h2>Post not found</h2>
        <Link to="/" className="back-btn">Back to Posts</Link>
      </div>
    );
  }

  return (
    <div className="post-detail-container">
      <div className="post-detail-card" style={{ backgroundColor: colorFromId(post.id) }}>
        <h1 className="post-detail-title">{post.title}</h1>
        <div className="post-detail-content">
          <p>{post.body}</p>
        </div>
        <div className="post-detail-tags">
          <h3>Tags:</h3>
          <div className="tags-container">
            {post.tags.map((tag, i) => (
              <span key={i} className="detail-tag">{tag}</span>
            ))}
          </div>
        </div>
        <Link to="/" className="back-btn">Back to Posts</Link>
      </div>
    </div>
  );
}

export default PostDetail; 