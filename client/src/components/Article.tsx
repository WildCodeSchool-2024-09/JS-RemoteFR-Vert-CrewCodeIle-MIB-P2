import "./Article.css";

import type { ArticleType } from "../lib/definitions";

const Article = ({ id, webTitle, webUrl }: ArticleType) => {
  return (
    <section className="article-card" key={id}>
      <h3>{webTitle}</h3>
      <a href={webUrl} target="_blank" rel="noopener noreferrer">
        Lire l'article
      </a>
    </section>
  );
};

export default Article;
