import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritePages() {
	const favoritesCtx = useContext(FavoritesContext);

	let content;
	if (favoritesCtx.totalFavorites === 0) {
		content = <p>No favorites</p>;
	} else {
		content = <MeetupList meetups={favoritesCtx.favorites} />;
	}

	return (
		<section>
			<h1>My favorites</h1>
			{content}
		</section>
	);
}

export default FavoritePages;
