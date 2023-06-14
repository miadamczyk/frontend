import React, { useState } from "react";
import classes from "./Accordion.module.css";

const Accordion = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className={classes.accordionTitle}>
			<div
				className={classes.accordionTitle}
				onClick={() => setIsActive(!isActive)}>
				<div>{title}</div>
				<div>{isActive ? "-" : "+"}</div>
			</div>
			{isActive && <div className={classes.accordionContent}>{content}</div>}
		</div>
	);
};

export default Accordion;
