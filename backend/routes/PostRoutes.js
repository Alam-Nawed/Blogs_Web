const express = require('express');
const router = express.Router();
const PostController=require('../controllers/PostController')


router.get("/",PostController.getPosts)
router.get("/:id",PostController.getPost)
router.post("/",PostController.addPost)
router.delete("/:id",PostController.deletePost)

module.exports=router