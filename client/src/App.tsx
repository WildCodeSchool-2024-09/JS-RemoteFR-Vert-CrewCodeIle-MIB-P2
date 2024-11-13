import "./App.css";

import ArticlesContainer from "./components/ArticlesContainer";
import Header from "./components/Header";
import SortBarPage from "./pages/SortBarPage";

function App() {
  return (
    <>
      <Header />
      <aside className="sortBarPage">
        <SortBarPage />
      </aside>
      <main className="container">
        <ArticlesContainer />
      </main>
    </>
  );
}

export default App;
