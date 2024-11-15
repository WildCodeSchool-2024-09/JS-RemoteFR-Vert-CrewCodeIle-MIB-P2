import "./SortBar.css";

export default function SortBar({
  categories,
  setCurrentCategory,
}: {
  categories: string[];
  setCurrentCategory: (v: string) => void;
}) {
  const handleClick = (value: string) => setCurrentCategory(value);

  return (
    <section className="sortBar">
      <div className="sortButtons">
        <button
          type="button"
          onClick={() => handleClick("")}
          className="buttons"
        >
          Tous les articles
        </button>
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            onClick={() => handleClick(c)}
            className="buttons"
          >
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}
