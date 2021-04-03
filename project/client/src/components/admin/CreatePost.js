//import hooks
import { useState, useEffect } from "react";
//functions import
import { isAuthenticated } from "../../controllers/auth";
import { createPost } from "../../controllers/blog";
import { showError, postSuccess, showLoading } from "../../controllers/alerts";

function CreatePost() {
  //state
  const [posts, setPosts] = useState({
    title: "",
    subtitle: "",
    text: "",
    photo: "",
    loading: false,
    error: "",
    success: false,
    formData: new FormData(),
  });
  //user and token from local storage
  const { user, token } = isAuthenticated();

  //check kind of data
  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    posts.formData.set(name, value);
    setPosts({ ...posts, [name]: value });
  };

  //end creation of post
  const submitForm = (event) => {
    event.preventDefault();
    createPost(user._id, token, posts.formData).then((data) => {
      if (data.error) {
        setPosts({ ...posts, success: false, error: data.error });
      } else {
        setPosts({
          ...posts,
          title: "",
          subtitle: "",
          text: "",
          photo: "",
          error: "",
          loading: false,
          success: true,
        });
      }
    });
  };
  return (
    <div className="createProduct">
      {showError(posts.error)}
      {postSuccess(posts.success)}
      {showLoading()}
      <form onSubmit={submitForm}>
        <div className="productData">
          <h2>Create Post</h2>
          <div>
            <h4>Post Photo</h4>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange("photo")}
              id="photo"
            />
            <small>Image should be less than 1mb</small>
          </div>
        </div>
        <div className="productInformation">
          <h4>Enter post</h4>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              placeholder="Enter title"
              type="text"
              onChange={handleChange("title")}
              id="title"
              value={posts.title}
            />
          </div>
          <div>
            <label htmlFor="subtitle">Subtitle:</label>
            <input
              placeholder="Enter subtitle"
              type="text"
              onChange={handleChange("subtitle")}
              id="subtitle"
              value={posts.subtitle}
            />
          </div>
          <div>
            <label htmlFor="text">Text:</label>
            <textarea
              placeholder="Enter text"
              onChange={handleChange("text")}
              id="text"
              rows="8"
              cols="50"
              value={posts.text}
            />
          </div>
          <div>
            <button>Create Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
