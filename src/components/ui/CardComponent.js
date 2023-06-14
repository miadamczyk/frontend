import { useState } from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroller"; //new
import { Link } from "react-router-dom";
import classes from "./CardComponent.module.css";

export default function CardComponent({ cardData }) {
	const [data, setData] = useState(cardData); //new

	const loading = async () => {
		//new
		const newCardData = [
			{
				title: "New meetup",
				buttonName: "add",
			},
		];
		if (data.length <= 100) {
			//new
			await setData((data) => [...data, ...newCardData]);
		}
	};

	return (
		<Container>
			<InfiniteScroll //new
				pageStart={0}
				loadMore={loading}
				hasMore={true || false}
				loader={
					<div className="loader" key={0}>
						Loading ...
					</div>
				}>
				<Row>
					{data.map(
						(
							data,
							index //new
						) => (
							<Col md={9} key={index}>
								<Card style={{ width: "625px" }}>
									<Card.Img
										variant="top"
										src="https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2RNK1P0BYVrSCZEy_Sd1Ew%252F3417757448_4a6bdf36ce_o.jpg&width=910"
									/>
									<Card.Body>
										<Card.Title className={classes.title}>
											{data.title}
										</Card.Title>
										<Card.Text>{data.description}</Card.Text>
										<Link to="/new-meetup">
											<button className={classes.button}>Add</button>
										</Link>
									</Card.Body>
								</Card>
								<br />
								<br />
							</Col>
						)
					)}
				</Row>
			</InfiniteScroll>
		</Container>
	);
}
