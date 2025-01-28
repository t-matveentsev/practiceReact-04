const ArticlesItem = ({ item }) => {
  return (
    <li>
      <a href={item.url} target="_blank" rel="noreferrer noopener">
        {item.title}
      </a>
    </li>
  );
};

export default ArticlesItem;
