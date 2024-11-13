import { useNavigate } from "react-router-dom";
import SortBar from "../components/SortBar";

const categories = [
  { id: "news", label: "News" },
  { id: "opinions", label: "Opinions" },
  { id: "sport", label: "Sport" },
  { id: "culture", label: "Culture" },
  { id: "lifestyle", label: "Lifestyle" },
];

const SortBarPage = () => {
  const navigate = useNavigate();

  const categorySelected = (filter: string) => {
    navigate(`/Article/${filter}`);
  };

  return (
    <div>
      <SortBar categories={categories} categorySelected={categorySelected} />
    </div>
  );
};

export default SortBarPage;
