//api
import { API } from "../../config";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <div className="post">
      <Link to={`/blog/${post._id}`}>
        <img src={`${API}/post/photo/${post._id}`} alt={post.name} />
      </Link>
      <div className="postInfo">
        <h3>{post.title}</h3>
        <h5>{post.subtitle}</h5>
        <p>
          {post.text.substring(0, 90)}...
          <Link to={`/blog/${post._id}`}>
            <small>Read more</small>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Post;
