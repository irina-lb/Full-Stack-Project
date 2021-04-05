//api url
import { API } from "../config";

//show all posts
export const getPosts = () => {
  return fetch(`${API}/posts`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

//show post by Id
export const postById = (postId) => {
  return fetch(`${API}/post/${postId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

//create new post
export const createPost = (userId, token, post) => {
  return fetch(`${API}/post/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: post,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete chosen post
export const deletePost = (postId, userId, token) => {
  return fetch(`${API}/post/${postId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

//update chosen post
export const updatePost = (postId, userId, token, post) => {
  return fetch(`${API}/post/${postId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: post,
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
