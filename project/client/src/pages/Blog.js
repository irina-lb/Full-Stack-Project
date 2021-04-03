//import components
import Layout from "../components/homePage/Layout";
import Post from "../components/blog/Post";
import PostDetails from "../components/blog/PostDetails";
//import image
import tips from "../styles/img/tips.jpg";
// import hooks
import { useState, useEffect } from "react";
//api
import { API } from "../config";
//functions import
import { getPosts } from "../controllers/blog";
import { useLocation } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function Blog() {
  //states
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(4);

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

  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //get all posts
  const allPosts = () => {
    getPosts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  useEffect(() => {
    allPosts();
  }, []);

  return (
    <>
      {pathId && <PostDetails pathId={pathId} />}
      <motion.div
        className="blogLayout"
        variants={pageAnimation}
        exit="exit"
        initial="hidden"
        animate="show"
      >
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 224 1440 96"
        >
          <path
            fill="#939597"
            d="M0,224L120,229.3C240,235,480,245,720,245.3C960,245,1200,235,1320,229.3L1440,
            224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
        <Layout
          title="Cooking Tips Blog"
          text="Cooking can be healthier and less expensive, but it's 
          not always the biggest time-saver. Between prepping your food, 
          actually cooking it, and then cleaning up...
          By switching up your way of doing things, and swapping out some 
          old tools for new ones, you can cut down your time in front of the stove. 
          Here are a few great cooking tips from our professional chefs 
          who know how to cook efficiently while making something delicious."
          img={tips}
        />
      </motion.div>
      <div className="pagination">
        <ul>
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
      </div>
      <motion.div
        className="allPosts"
        variants={pageAnimation}
        exit="exit"
        initial="hidden"
        animate="show"
      >
        {currentItems.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </motion.div>
    </>
  );
}

export default Blog;
