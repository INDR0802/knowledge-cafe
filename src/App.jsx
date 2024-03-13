import { useState } from "react";
import BlogData from "./components/BlogData";
import Bookmark from "./components/Bookmark";
import Header from "./components/Header";
import ReadTime from "./components/ReadTime";

function App() {
  let [bookmarks, setBookmarks] = useState([]);
  let [readTime, setReadTime] = useState(0);

  let markAsRead = (time) => {
    setReadTime(readTime + time);
  };

  let handleBookmark = (blog) => {
    let newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  console.log(readTime);
  return (
    <>
      <main className="max-w-[1200px] mx-auto">
        <Header />
        <div className="flex gap-10">
          <BlogData handleBookmark={handleBookmark} markAsRead={markAsRead} />
          <div className="w-2/3">
            <ReadTime readTime = {readTime} />
            <Bookmark bookmarks={bookmarks} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
