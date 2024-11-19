import { createContext, useContext, useState } from "react";

type FavoritesContextType = {
	favorites: string[];
	toggleFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
	undefined,
);

export const FavoritesProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const [favorites, setFavorites] = useState<string[]>([]);

	const toggleFavorite = (id: string) => {
		if (favorites.includes(id)) {
			setFavorites(favorites.filter((favId) => favId !== id));
		} else {
			setFavorites([...favorites, id]);
		}
	};

	return (
		<FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
};

export const useFavorites = () => {
	const context = useContext(FavoritesContext);
	if (!context) {
		throw new Error("error of context");
	}
	return context;
};
