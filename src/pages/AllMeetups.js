import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
import { cardData } from "../components/ui/mock";
import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";
const CardComponent = lazy(() => import("../components/ui/CardComponent"));

function AllMeetupsPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [loadedMeetups, setLoadedMeetups] = useState([]);
	useEffect(() => {
		setIsLoading(true);
		fetch(
			"https://frontend-9328a-default-rtdb.europe-west1.firebasedatabase.app//meetups.json"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = [];
				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				}
				setIsLoading(false);
				setLoadedMeetups(meetups);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={loadedMeetups} />

			<Suspense
				style="margin-left:auto;margin-right:auto;text-align:center"
				fallback={<div>isLoading...</div>}>
				{" "}
				<br />
				<CardComponent cardData={cardData} />
			</Suspense>
		</section>
	);
}

export default AllMeetupsPage;
