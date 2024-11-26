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

  const favoritesSelected = collectFavorites();

  return (
    <>
      <section className="articles-container">
        {articles
          .filter((a) => a.pillarName?.includes(currentCategory))
          .map((a: ArticleType) => (
            <Article key={a.id} {...a} />
          ))}

        {articles
          .filter((a) => favoritesSelected?.includes(a.id))
          .map((a: ArticleType) => (
            <Article key={a.id} {...a} />
          ))}
      </section>
    </>
  );
}
