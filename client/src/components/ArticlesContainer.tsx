import Article from "./Article";
import "./ArticlesContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiUrls } from "../assets/ApiUrls";

const baseUrl = "https://content.guardianapis.com/";

type ArticleData = {
  id: string;
  webTitle: string;
  webUrl: string;
};

const ArticlesContainer = () => {
  const { id } = useParams<{ id: keyof typeof ApiUrls }>();
  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const endUrl = id ? ApiUrls[id] : ApiUrls.news;
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `${baseUrl}${endUrl}&api-key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.response.results);
    };
    fetchArticles();
  }, [id]);

  return (
    <section className="articles-container">
      {articles.map((article) => (
        <Article
          key={article.id}
          id={article.id}
          webTitle={article.webTitle}
          webUrl={article.webUrl}
        />
      ))}
    </section>
  );
};

export default ArticlesContainer;
