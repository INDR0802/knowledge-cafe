import BlogData from "./components/BlogData";
import Bookmark from "./components/Bookmark";
import Header from "./components/Header";

function App() {
  return (
    <>
      <main className="max-w-[1200px] mx-auto">
        <Header />
        <div className="flex gap-10">
          <BlogData />
          <Bookmark />
        </div>
      </main>
    </>
  );
}

export default App;
