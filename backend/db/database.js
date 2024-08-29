const mongoose=require("mongoose")

const connectDB=async()=>{
try{
await mongoose.connect(`mongodb+srv://suman:suman123@blog.xuhyhel.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
  useUnifiedTopology: true
})
console.log('Connected to MongoDB successfully')
}catch(err){
    console.error(err.message);
}
}

module.exports=connectDB