const mongoose=require("mongoose")

const PostSchema=mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    img: {
        type: String || null, // Store the image filename as a string
       required: true,
    }, 
    date:{
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", // Reference to the User model
      },
})

module.exports=mongoose.model("post",PostSchema)