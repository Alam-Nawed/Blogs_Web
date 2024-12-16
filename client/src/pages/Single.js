import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import image from "../profile.jpeg";
import { Menu } from "../Components/Menu";
import axios from "axios";
import moment from "moment";
import image2 from "../images/hello.jpg";
import UserContext from "../context/UserContext";


const Single = () => {
  const { id: postId } = useParams();
  const [post, setPost] = useState({});
  const [file, setFile] = useState(null); // To store the selected image file
  

  const navigate = useNavigate();
  // Fetch the single blog post
  useEffect(() => {
    async function fetchData() {
      const {data}  = await axios.get(`http://localhost:4000/post/${postId}`);
      console.log(data)
      setPost(data.data.post);
    }
    fetchData();
  }, [postId]);

  const deletePost = async () => {
    
      await axios.delete(`http://localhost:4000/post/${postId}`);
      navigate("/");
      }
  

  return (
    <div className="flex justify-evenly py-[5%] px-[2%]">
      <div className="flex-col space-y-4">
        <img src={`/${post.img}`} className="w-3/6 rounded-md" />
        <div className="flex items-center space-x-2">
          <div>
            <img src={image} className="w-12" />
          </div>
          <div className="flex-col">
            <span className="font-bold text-lg">
              {post.author ? post.author :
              "John"
              }</span>
            <p className="text-sm font-serif">
              Posted {moment(post.date).fromNow()}
            </p>
          </div>
          <div className="flex">
            <div
              className="bg-red-600 rounded-full px-2 py-2 cursor-pointer"
              onClick={deletePost}
            >
              <MdDelete size={15} fill="white" />
            </div>
          </div>
        </div>
        <div className="w-[100vh]">
          <h2 className="font-bold text-2xl">{post.title}</h2>
          <p className="font-sans justify-center">{post.content}</p>
        </div>
      </div>
      
    </div>
  );
  }

export default Single;
