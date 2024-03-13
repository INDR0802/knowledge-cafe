import { useState } from "react";
import BlogData from "./components/BlogData";
import Bookmark from "./components/Bookmark";
import Header from "./components/Header";

function App() {
  let [bookmarks, setBookmarks] = useState([]);

  let handleBookmark = (blog) => {
    let newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  console.log(bookmarks);
  return (
    <>
      <main className="max-w-[1200px] mx-auto">
        <Header />
        <div className="flex gap-10">
          <BlogData handleBookmark={handleBookmark} />
          <Bookmark bookmarks = {bookmarks}/>
        </div>
      </main>
    </>
  );
}

export default App;
