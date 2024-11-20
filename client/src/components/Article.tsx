import "./Article.css";

import type { ArticleType } from "../lib/definitions";
import { useEffect, useState } from "react";

const collectFavorites = () => {
	const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
	return favorites;
};

const Article = ({ id, webTitle, webUrl }: ArticleType) => {
	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	const updateFavorites = (updatedFavorites: string[]) => {
		localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
		setIsFavorite(updatedFavorites.includes(id));
	};

	useEffect(() => {
		const favorites = collectFavorites();
		setIsFavorite(favorites.includes(id));
	}, [id]);

	const toggleFavorite = (id: string) => {
		const favorites = collectFavorites();
		if (favorites.includes(id)) {
			const newFavorites = favorites.filter((favId: string) => favId !== id);
			updateFavorites(newFavorites);
		} else {
			updateFavorites([...favorites, id]);
		}
	};

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
