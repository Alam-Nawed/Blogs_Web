const Post = require("../models/PostSchema");
const cheerio = require("cheerio");
const User=require("../models/UserSchema")

const getPosts = async (req, res) => {
  let query = {};
  if (req.query.category) {
    // Check if a 'category' query parameter is present
    query.category = req.query.category; // Set the category filter in the query
  }
  const posts = await Post.find(query).sort('date');

  return res.status(200).json({
    statusCode: 200,
    message: "Fetched posts",
    data: { posts },
  });
};
const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id)
  return res.status(200).json({
    statusCode: 200,
    message: "Fetched post",
    data: {
      post: post || {},
    },
  });
};

const deletePost = async (req, res) => {
  const result = await Post.deleteOne({ _id: req.params.id });
  return res.status(200).json({
    statusCode: 200,
    message: `Deleted ${result.deletedCount} post(s)`,
    data: {},
  });
};

const addPost = async (req, res) => {
  const { title, content, img, category, date } = req.body;
  const sanitizedContent = cheerio.load(content).text();

  try {
    const post = new Post({
      title,
      content: sanitizedContent,
      img,
      category,
      date,
    });
    await post.save();
    res.status(200).json({ message: "Post Created SuccessFully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error Creating the Post" });
  }
};

module.exports = { getPost, getPosts, deletePost, addPost };
