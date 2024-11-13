import "./SortBar.css";

type Category = {
  id: string;
  label: string;
};

type SortBarProps = {
  categories: Category[];
  categorySelected: (filter: string) => void;
};

const SortBar = ({ categories, categorySelected }: SortBarProps) => {
  return (
    <section className="sortBar">
      <div className="sortButtons">
        {categories.map((category) => (
          <button
            key={category.id}
            className="buttons"
            type="button"
            onClick={() => categorySelected(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </section>
  );
};
export default SortBar;
