import "./App.css";

import ArticlesContainer from "./components/ArticlesContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
