import { useLoaderData } from "react-router-dom";
import Article from "./Article";
import "./ArticlesContainer.css";

type ArticleData = {
  id: string;
  webTitle: string;
  webUrl: string;
};

type ApiResponse = {
  response: {
    results: ArticleData[];
  };
};

const ArticlesContainer = () => {
  const data = useLoaderData() as ApiResponse;
  return (
    <section className="articles-container">
      {data.response.results.map((article) => (
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
