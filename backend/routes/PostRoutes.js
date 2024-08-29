const express = require('express');
const router = express.Router();
const PostController=require('../controllers/PostController')
const authenticate = require('../middleware/authMiddleware'); // Adjust path as needed


router.get("/",PostController.getPosts)
router.get("/:id",PostController.getPost)
router.post("/",authenticate,PostController.addPost)
router.delete("/:id",PostController.deletePost)

module.exports=router