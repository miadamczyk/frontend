import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import QNA from "./pages/QNA";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritePages from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path="/" exact element={<AllMeetupsPage />} />
					<Route path="/Q&A" exact element={<QNA />} />
					<Route path="/new-meetup" element={<NewMeetupsPage />} />
					<Route path="/favorites" element={<FavoritePages />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
