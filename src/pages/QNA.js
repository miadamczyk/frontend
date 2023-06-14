import { accordionData } from "../components/ui/Content";
import React from "react";
import Accordion from "../components/ui/Accordion";
import classes from "../components/ui/Accordion.module.css";

function QNA() {
	return (
		<div>
			<h1>Q&As</h1>
			<div className={classes.accordion}>
				{accordionData.map(({ title, content }) => (
					<Accordion title={title} content={content} />
				))}
			</div>
		</div>
	);
}

export default QNA;
