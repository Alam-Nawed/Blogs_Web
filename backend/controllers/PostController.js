const Post=require('../models/PostSchema')
const cheerio = require('cheerio');



const getPosts = (req, res) => {};

const getPost = (req, res) => {};

const deletePost = (req, res) => {};

const addPost = async (req, res) => {

    const{title,content,img,category,date}=req.body
    const sanitizedContent = cheerio.load(content).text();

  try {
    const post = new Post({
        title,content:sanitizedContent,img,category,date
    });
    await post.save();
    res.status(200).json({message:"Post Created SuccessFully"});
  } catch (err) {
    console.error(err)
    res.status(500).json({message:"Error Creating the Post"});
  }
};

const updatePost = (req, res) => {};

module.exports = { getPost, getPosts, deletePost, addPost, updatePost };
