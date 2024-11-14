import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SortBar from "../components/SortBar";
import ArticlesContainer from "../components/ArticlesContainer";
// biome-ignore lint/style/useImportType: <explanation>
import { ArticleType } from "../lib/definitions";
import "../components/HomePage.css";

const HomePage = () => {
	const articles: ArticleType[] = useLoaderData() as ArticleType[];

	const [currentCategory, setCurrentCategory] = useState<string>("");

	const categories: string[] = [...new Set(articles.map((a) => a.pillarName))];

	return (
		<div className="container">
			<SortBar
				categories={categories}
				setCurrentCategory={setCurrentCategory}
			/>
			<ArticlesContainer
				articles={articles}
				currentCategory={currentCategory}
			/>
		</div>
	);
};

export default HomePage;
