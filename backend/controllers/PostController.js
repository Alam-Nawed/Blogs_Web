const Post = require("../models/PostSchema");
const cheerio = require("cheerio");

const getPosts = async (req, res) => {
  const posts = await Post.find().sort(`date`);
  return res.status(200).json({
    statusCode: 200,
    message: "Fetched all posts",
    data: { posts },
  });
};

const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
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

const updatePost = async (req, res) => {
  const { title, content, image, category, date } = req.body;

  const post = await Post.findByIdAndUpdate(req.params, {
    title,
    content,
    image,
    category,
    date,
  });
  return res.status(200).json({
    statusCode: 200,
    message: "Updated post",
    data: { post },
  });
};

module.exports = { getPost, getPosts, deletePost, addPost, updatePost };
