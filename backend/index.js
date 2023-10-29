const express = require("express");
const cors=require("cors")
const multer=require("multer")
const connectDB=require('./db/database.js')
const userRoutes=require('./routes/UserRoutes')
const postRoutes=require('./routes/PostRoutes.js')


const app = express();
app.use(express.json())
app.use(cors())
connectDB();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use('/user', userRoutes);
app.use('/post',postRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => {
    console.log(`Server Started SuccessFully`);
  });
  