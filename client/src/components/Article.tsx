import "./Article.css";

import type { ArticleType } from "../lib/definitions";
import { useFavorites } from "../contexts/FavoritesContext";

const Article = ({ id, webTitle, webUrl }: ArticleType) => {
	const { favorites, toggleFavorite } = useFavorites();
	const isFavorite = favorites.includes(id);

	return (
		<section className="article-card" key={id}>
			<h3>{webTitle}</h3>
			<a href={webUrl} target="_blank" rel="noopener noreferrer">
				Lire l'article
			</a>
			<button
				className="favorite-button"
				type="button"
				onClick={() => toggleFavorite(id)}
			>
				{isFavorite ? "❤️" : "🖤"}
			</button>
		</section>
	);
};

export default Article;
