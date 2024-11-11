import "./App.css";

import ArticlesContainer from "./components/ArticlesContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<main className="container">
				<ArticlesContainer />
			</main>
			<Footer />
		</>
	);
}

export default App;
