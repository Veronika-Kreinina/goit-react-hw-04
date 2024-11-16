const Art = ({ articles }) => {
  return (
    <ul>
      {articles.map((post) => (
        <li key={post.objectId}>
          <a href={post.url}>{post.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Art;
