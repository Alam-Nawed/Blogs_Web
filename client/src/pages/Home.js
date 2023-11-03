import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import moment from "moment";
import GridLoader from "react-spinners/GridLoader";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const category = useLocation().search;
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Call the server to fetch the posts and store them into the state
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/post${category}`
        );
        setPosts(data.data.posts);
        setTimeout(() => {
          setLoading(false); // Set loading to false after a delay
        }, 1000);
      } catch (err) {
        console.log("Could not get the posts");
      }
    }
    fetchData();
  }, [category]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen my-10">
          <GridLoader color="blue" loading={loading} size={50} />
        </div>
      ) : (
        <div className="flex-inital space-y-20 py-8 px-[10%] bg-slate-200">
          <div>
            {posts.length > 0 && (
              <div className="flex space-x-1 items-center justify-center">
                <img
                  src={posts[0].img}
                  className="w-3/6 object-cover scale-100"
                  alt={posts[0].title}
                />

                <div className="flex-col px-10 space-y-4">
                  <div className="flex items-center space-x-2 ">
                    <p className="text-sm font-serif">
                      Posted {moment(posts[0].date).fromNow()}
                    </p>
                    <span>•</span>
                    <p className="text-pink-600">{posts[0].category}</p>
                  </div>

                  <div className="font-bold text-xl">
                    <Link to={`/post/${posts[0]._id}`}>{posts[0].title}</Link>
                  </div>

                  <p>{posts[0].content.substring(0, 300)}....</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">Popular Categories</p>
            <div className="flex justify-between text-white font-bold">
              <Link to="/?category=art">
                <button className="bg-rose-400 px-8 py-2 rounded-md">
                  Art
                </button>
              </Link>
              <Link to="/?category=science">
                <button className="bg-red-600 px-8 py-2 rounded-md">
                  Science
                </button>
              </Link>
              <Link to="/?category=technology">
                <button className="bg-orange-800 px-8 py-2 rounded-md">
                  Technology
                </button>
              </Link>
              <Link to="/?category=food">
                <button className="bg-green-600 px-8 py-2 rounded-md">
                  Food
                </button>
              </Link>
              <Link to="/?category=sports">
                <button className="bg-yellow-600 px-8 py-2 rounded-md">
                  Sports
                </button>
              </Link>
            </div>
          </div>
          <div className="">
            {posts.slice(1).map((item, id) => (
              <div
                className="flex space-x-2 justify-start items-center"
                key={id}
              >
                <img src={item.img} className="w-1/3 scale-[85%]" />
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 ">
                    <p className="text-sm font-serif">
                      Posted {moment(item.date).fromNow()}
                    </p>
                    <span>•</span>
                    <p className="text-pink-600">{item.category}</p>
                  </div>
                  <Link to={`/post/${item._id}`}>
                    <p className="text-xl font-bold">{item.title}</p>
                  </Link>

                  <p className="text-slate-800 text-sm font-light">
                    {item.content.substring(0, 250)}....
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
