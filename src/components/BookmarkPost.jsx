const BookmarkPost = ({ bookmark }) => {
  return (
    <div className="bg-white p-3 rounded-xl my-3">
      <h1>{bookmark.title}</h1>
    </div>
  );
};

export default BookmarkPost;
