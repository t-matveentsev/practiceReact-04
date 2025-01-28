import { useEffect, useState } from "react";
import ArticleList from "./components/ArticlesList/ArticlesList";
import SearchBar from "./components/SearchBar/SearchBar";
import * as articlesService from "./services/api";
import toast from "react-hot-toast";
import s from "./App.module.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!query) return;
    async function fetchArticles() {
      try {
        setIsError(false);
        setLoading(true);
        const { hits } = await articlesService.fetchRequest(query, page);
        setArticles((prev) => [...prev, ...hits]);
      } catch {
        toast.error("Server is dead");
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [query, page]);

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
    setArticles([]);
    setPage(0);
    toast.success("Keep your search results");
  };

  return (
    <div className={s.container}>
      <h1>Latest articles</h1>
      <SearchBar onSubmit={handleSetQuery} />
      {articles.length > 0 && <ArticleList items={articles} />}
      {loading && <p>Loading data, please wait...</p>}
      {isError && <p>Something went wrong!!</p>}
      {articles.length > 0 && (
        <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
      )}
    </div>
  );
}
