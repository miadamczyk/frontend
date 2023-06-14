import MyCard from "../ui/MyCard";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function submitHander(event) {
		event.preventDefault();
		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			adress: enteredAddress,
			description: enteredDescription,
		};
		props.onAddMeetup(meetupData);
	}

	return (
		<MyCard>
			<form className={classes.form} onSubmit={submitHander}>
				<div className={classes.control}>
					<label htmlFor="title">Meetup title</label>
					<input type="text" required id="title" ref={titleInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="image">Meetup image</label>
					<input type="url" required id="image" ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="adress">Adress</label>
					<input type="text" required id="adress" ref={addressInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						required
						rows="5"
						ref={descriptionInputRef}></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</MyCard>
	);
}

export default NewMeetupForm;
