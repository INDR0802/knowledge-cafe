import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const BlogData = () => {
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  

  return (
    <div>
      {blogs.map((blog) => (
        <Blog key={blog.id} data={blog}></Blog>
      ))}
    </div>
  );
};

export default BlogData;
