//import hooks
import { useState, useEffect } from "react";
//import routes
import { Link } from "react-router-dom";
//import functions
import { getPosts, deletePost } from "../../controllers/blog";
import { isAuthenticated } from "../../controllers/auth";

function PostUpdate() {
  //states
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(6);

  //pagination
  const pages = [];
  for (let i = 1; i <= Math.ceil(posts.length / limit); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  //user from jwt
  const { user, token } = isAuthenticated();

  //get all posts
  const loadPosts = () => {
    getPosts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  //deleting of the chosen post
  const deleteChosenPost = (postId) => {
    deletePost(postId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadPosts();
      }
    });
  };

  return (
    <div className="productUpdate">
      <p>Choose one post to upgrade or delete.</p>
      <ul className="paginationAdmin">
        {pages.map((number) => (
          <li
            key={number}
            id={number}
            onClick={handleClick}
            className={currentPage == number ? "activePage" : null}
          >
            {number}
          </li>
        ))}
      </ul>
      <div className="listOfProducts">
        <ul>
          {currentItems.map((post, index) => (
            <li key={post._id} className="productItem">
              <p className="productName">
                <span>{index + 1}.</span> {post.title}
              </p>
              <p>
                <span>Subtitle:</span> {post.subtitle}
              </p>
              <Link to={`/admin/update/post/${post._id}`}>
                <button className="updateButton">Update</button>
              </Link>
              <div>
                <button
                  className="deleteButton"
                  onClick={() => deleteChosenPost(post._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostUpdate;
