const mongoose=require("mongoose")

const connectDB=async()=>{
try{
const conn=await mongoose.connect(`mongodb://localhost:27017/blog`,{
    useNewUrlParser: true,
  useUnifiedTopology: true
})
console.log('Connected to MongoDB successfully')
}catch(err){
    console.error(err.message);
}
}

module.exports=connectDB