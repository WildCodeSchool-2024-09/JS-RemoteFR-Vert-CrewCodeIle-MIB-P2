import "./App.css";

import ArticlesContainer from "./components/ArticlesContainer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <main className="container">
        <ArticlesContainer />
      </main>

      <Header />
    </>
  );
}

export default App;
