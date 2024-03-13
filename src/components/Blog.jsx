const Blog = ({ data }) => {
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
    <div>
      <img src={cover} alt="" className="w-screen" />
      <div className="flex justify-between my-3">
        <div className="flex items-center gap-2">
          <img src={author_img} alt="" className="h-[50px]" />
          <div>
            <h1 className="font-extrabold">{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>
        <p>{reading_time} min read</p>
      </div>
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p>
        #{hashtags[0]} #{hashtags[1]}
      </p>
    </div>
  );
};

export default Blog;
