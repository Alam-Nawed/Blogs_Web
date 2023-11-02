import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Hello = () => {
  const { id: postId } = useParams();
  const [post, setPost] = useState({});
  const [file, setFile] = useState(null); // To store the selected image file

  const navigate = useNavigate();
  
  // Fetch the single blog post
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`http://localhost:4000/post/${postId}`);
        setPost(data.data.post);
        setFile(data.data.post.img); // Update 'file' with the image URL from the fetched post
        console.log(data.data.post.title);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }
    fetchData();
  }, [postId]);

  return (
    <div>
      <img src={file} alt={post.title} />
      <p>sfkljsdflkds</p>
      <span>hello this is me</span>
    </div>
  );
};

export default Hello;
