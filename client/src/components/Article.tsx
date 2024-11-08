import "./Article.css";

type ArticleProps = {
  id: string;
  webTitle: string;
  webUrl: string;
};

const Article = ({ id, webTitle, webUrl }: ArticleProps) => {
  return (
    <section className="article-card" key={id}>
      <h3> {webTitle} </h3>
      <a href={webUrl} target="blank">
        Lire l'article
      </a>
    </section>
  );
};

export default Article;
