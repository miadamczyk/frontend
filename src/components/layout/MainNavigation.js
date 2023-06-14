import { Link } from "react-router-dom";
import AllMeetupsPage from "../../pages/AllMeetups";
import NewMeetupPage from "../../pages/NewMeetups";
import FavoritePages from "../../pages/Favorites";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}> React Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to="/Q&A">Q&A</Link>
					</li>
					<li>
						<Link to="/">AllMeetupsPage</Link>
					</li>
					<li>
						<Link to="/new-meetup">NewMeetupPage</Link>
					</li>
					<li>
						<Link to="/favorites">FavoritePages</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
