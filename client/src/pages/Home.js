import React, { useState,useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Home = () => {

  const [posts, setPosts] = useState([]); 
  const category = useLocation().search

  useEffect(() => {
    // Call the server to fetch the posts and store them into the state
    async function fetchData() {
      try{
        const { data } = await axios.get(`http://localhost:4000/post${category}`);
        setPosts(data.data.posts);
        console.log(posts)
      }catch(err){
        console.log("Could Not get the posts")
      }
    }
    fetchData();
  }, [category]);

  return (
    <div className="flex-inital space-y-6 my-8">
        {posts.map((item, id) => (
        <div className="flex px-[10%] space-x-2">
          <div className="relative">
            <img
              src={item.img}
              className="w-2/3 object-contain"
              alt={item.title}
            />
            <div className="bg-green-300 absolute top-2 -left-3 -z-10 w-2/3 h-full" />
          </div>
          <div className="flex-col px-10">
            <Link className="font-bold text-2xl" to={`/post/${item._id}`}>{item.title}</Link>
            <p>{item.content.substring(0,100)}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Home;
