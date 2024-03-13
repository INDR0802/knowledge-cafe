import { FaBookmark } from "react-icons/fa";

const Blog = ({ data, handleBookmark, markAsRead }) => {
  let {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = data;

  return (
    <div className="mb-[50px]">
      <img src={cover} alt="" className="w-screen" />
      <div className="flex justify-between my-3">
        <div className="flex items-center gap-2">
          <img src={author_img} alt="" className="h-[50px]" />
          <div>
            <h1 className="font-extrabold">{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>{reading_time} min read</p>
          <button onClick={() => handleBookmark(data)}>
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p>
        #{hashtags[0]} #{hashtags[1]}
      </p>
      <button
        className="mt-3 font-extrabold text-purple-500 underline"
        onClick={() => markAsRead(reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
