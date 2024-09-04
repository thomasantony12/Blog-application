import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { name: title, content: content });
});

app.post("/postBlog", (req, res) => {
  var postTitle = req.body["title"];
  var postContent = req.body["content"];
  title.splice(0, 0, postTitle);
  content.splice(0, 0, postContent);
  res.render("index.ejs", { name: title, content: content });
});

app.post("/editBlog", (req, res) => {
  var index = req.body["index"];
  res.render("editOneBlog.ejs", {
    name: title[index],
    content: content,
    index: index,
  });
});

app.post("/editOneBlog", (req, res) => {
  var index = req.body["index"];
  title[index] = req.body["title"];
  res.render("editBlog.ejs", { name: title, content: content });
});

app.post("/DeleteBlog", (req, res) => {
  var index = req.body["index"];
  title.splice(index, 1);
  res.render("deleteBlog.ejs", { name: title, content: content });
});

app.get("/postBlog", (req, res) => {
  res.render("postBlog.ejs");
});

app.get("/editBlog", (req, res) => {
  res.render("editBlog.ejs", { name: title, content: content });
});

app.get("/deleteBlog", (req, res) => {
  res.render("deleteBlog.ejs", { name: title, content: content });
});

app.listen(port, () => {
  console.log(`Project running at port: ${port}`);
});

var title = [
  "Aarav",
  "Aditi",
  "Aisha",
  "Akash",
  "Aman",
  "Amara",
  "Ananya",
  "Arjun",
  "Arya",
  "Ayaan",
  "Bhavya",
  "Chaitanya",
  "Dev",
  "Diya",
  "Esha",
  "Gaurav",
  "Ishaan",
  "Jiya",
  "Kabir",
  "Kavya",
  "Laksh",
  "Maya",
  "Meera",
  "Naina",
  "Neha",
  "Nikhil",
  "Om",
  "Parth",
  "Prisha",
  "Raghav",
  "Rhea",
  "Rishi",
  "Riya",
  "Saanvi",
  "Sahil",
  "Samaira",
  "Sara",
  "Shaurya",
  "Siya",
  "Soham",
  "Tanvi",
  "Tara",
  "Tia",
  "Ved",
  "Vihaan",
  "Vihan",
  "Yash",
  "Yuvraj",
  "Zara",
  "Zoya",
];

var content = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus itaque dolorum excepturi, nostrum, commodi non blanditiis autem maximeea deleniti facilis placeat velit ducimus! Magni laborum tempore magnam accusamus!",
];
