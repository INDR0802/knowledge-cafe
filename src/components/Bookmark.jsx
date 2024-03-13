import BookmarkPost from "./BookmarkPost";

const Bookmark = ({ bookmarks }) => {
  return (
    <div className="border-2 w-2/3 bg-slate-300 p-8 rounded-2xl h-full">
      <h1 className="text-2xl font-extrabold">
        Bookmarked Blogs: {bookmarks.length}
      </h1>
      <div>
        {bookmarks.map((bookmark) => (
          <BookmarkPost key={bookmark.id} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
