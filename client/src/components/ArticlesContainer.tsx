// biome-ignore lint/style/useImportType: <explanation>
import { ArticleType } from "../lib/definitions";
import Article from "./Article";
import "./ArticlesContainer.css";

export default function ArticlesContainer({
	articles,
	currentCategory,
}: {
	articles: ArticleType[];
	currentCategory: string;
}) {
	return (
		<>
			<section className="articles-container">
				{articles
					.filter((a) => a.pillarName.includes(currentCategory))
					.map((a: ArticleType) => (
						<Article key={a.id} {...a} />
					))}
			</section>
		</>
	);
}
