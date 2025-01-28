import { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import fetchRequest from "./services/api.js";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setIsError(false);
        setLoading(true); // 1. Встановлюємо індикатор в true перед запитом
        const { hits } = await fetchRequest();
        setArticles(hits);
      } catch {
        setIsError(true);
        // Тут будемо обробляти помилку
      } finally {
        // 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {isError && <p>Something went wrong!!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
      <button>Load more</button>
    </div>
  );
}
