import classes from "./MeetupItem.module.css";
import MyCard from "../ui/MyCard";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
	const favoritesCtx = useContext(FavoritesContext);
	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

	function toggleFavoriteStatusHandler() {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(props.id);
		} else {
			favoritesCtx.addFavorite({
				id: props.id,
				title: props.title,
				description: props.description,
				image: props.image,
				adress: props.adress,
			});
		}
	}
	return (
		<li className={classes.item}>
			<MyCard>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.adress}</address>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoriteStatusHandler}>
						{itemIsFavorite ? "Remove from favorites" : "To favorites"}
					</button>
				</div>
			</MyCard>
		</li>
	);
}

export default MeetupItem;
