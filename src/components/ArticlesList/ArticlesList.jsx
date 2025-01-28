import ArticlesItem from "../ArticlesItem/ArticlesItem";

const ArticlesList = ({ items }) => (
  <ul>
    {items.map((item) => (
      <ArticlesItem key={item.ObjectID} item={item} />
    ))}
  </ul>
);

export default ArticlesList;
