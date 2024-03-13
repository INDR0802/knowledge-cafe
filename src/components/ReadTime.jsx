const ReadTime = ({ readTime }) => {
  return (
    <div className="bg-purple-200 border-purple-600 border-2 rounded-xl p-5 mb-2 text-center text-xl font-extrabold">
      <h1>Spent time on Read: {readTime} min</h1>
    </div>
  );
};

export default ReadTime;
