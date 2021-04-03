//api
import { API } from "../../config";
//hooks import
import { useState, useEffect } from "react";
//import function
import { postById } from "../../controllers/blog";
//routes import
import { Link, useHistory } from "react-router-dom";
//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function PostDetails({ pathId }) {
  //state
  const [post, setPost] = useState({});
  const [error, setError] = useState(false);

  //load post by id
  const loadPost = (postId) => {
    postById(postId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPost(data);
      }
    });
  };
  useEffect(() => {
    loadPost(pathId);
  }, []);

  const history = useHistory();
  //exit from the post
  const exitDetailHandler = (event) => {
    const element = event.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/blog");
    }
  };

  return (
    <div className="shadow" onClick={exitDetailHandler}>
      <div className="postDetails">
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
          className="close"
          onClick={() => history.push("/blog")}
        />
        <img src={`${API}/post/photo/${post._id}`} alt={post.name} />
        <h3>{post.title}</h3>
        <h5>{post.subtitle}...</h5>
        <p>{post.text}</p>
        <Link to="/blog">
          <button>See more posts</button>
        </Link>
      </div>
    </div>
  );
}

export default PostDetails;
