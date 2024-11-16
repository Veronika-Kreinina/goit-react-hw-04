const LoadMoreBtn = () => {
  return <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>;
};

export default LoadMoreBtn;
