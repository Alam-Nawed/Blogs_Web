import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id: postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/post/${postId}`
        );

        const { title, content, category } = data.data.post;
        console.log(title, content, category);
        setPost({
          title: title,
          content: content,
          category: category,
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [postId]);

  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:4000/post/${postId}`, {
        title: post.title,
        content: post.content,
        category: post.category,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
      console.log(res.data);
      navigate(`/post/${postId}`);
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <div className="flex px-[8%] justify-around py-[5%] space-x-4">
      {post.title && post.category ? (
        <div>
          <div className="w-[70%] space-y-2">
            <input
              type="text"
              placeholder="Enter the title"
              className="border-[1.5px] border-slate-300 w-full py-2 px-2 text-black"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <div className="h-[34.5%]">
              <ReactQuill
                theme="snow"
                value={post.content}
                onChange={(value) => setPost({ ...post, content: value })}
                className="h-[200%]"
                required
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3 w-[30%]">
            <div className="flex flex-col space-y-1 border-[1.5px] border-slate-300 p-2">
              <h1 className="text-2xl font-extrabold">Publish</h1>

              <span>
                <b>Visibility: </b> Public
              </span>

              <div className="flex justify-between">
                <button className="bg-sky-400 px-2 py-1 rounded-sm text-sm">
                  Save as draft
                </button>
                <button
                  className="bg-sky-400 px-2 py-1 rounded-sm text-sm"
                  onClick={handleSubmit}
                >
                  Update
                </button>
              </div>
            </div>
            <div className="flex flex-col border-[1.5px] border-slate-300 p-2">
              <h1 className="text-2xl font-extrabold">Category</h1>
              <div>
                <input
                  type="radio"
                  name="cat"
                  value="art"
                  id="art"
                  checked={post.category === "art"}
                  onChange={() => setPost({ ...post, category: "art" })}
                />
                <label htmlFor="art">Art</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="cat"
                  value="science"
                  id="science"
                  checked={post.category === "science"}
                  onChange={() => setPost({ ...post, category: "science" })}
                />
                <label htmlFor="science">Science</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="cat"
                  value="technology"
                  id="technology"
                  checked={post.category === "technology"}
                  onChange={() => setPost({ ...post, category: "technology" })}
                />
                <label htmlFor="technology">Technology</label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Fetching the posts.. Please Wait</div>
      )}
    </div>
  );
};

export default Edit;
