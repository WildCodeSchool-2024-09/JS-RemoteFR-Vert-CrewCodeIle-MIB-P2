import { useState } from "react";
import type { ArticleType } from "../lib/definitions";
import Article from "./Article";
import "./ArticlesContainer.css";

export default function ArticlesContainer({
  articles,
  currentCategory,
}: {
  articles: ArticleType[];
  currentCategory: string;
}) {
  const collectFavorites = () => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : ([] as string[]);
  };

  const [favorites, setFavorites] = useState<string[]>(collectFavorites());

  const handleFavoriteChange = () => {
    setFavorites(collectFavorites());
  };

  return (
    <>
      <section className="articles-container">
        {articles
          .filter((a) => a.pillarName?.includes(currentCategory))
          .map((a: ArticleType) => (
            <Article key={a.id} {...a} modifyFavorites={handleFavoriteChange} />
          ))}

        {favorites.map((favId) => {
          const article = articles.find((a) => a.id === favId);
          return article ? (
            <Article
              key={article.id}
              {...article}
              modifyFavorites={handleFavoriteChange}
            />
          ) : (
            []
          );
        })}
      </section>
    </>
  );
}
