import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

function UserReviews() {
	const [rating, setRating] = useState(3);

	return (
		<Container>
			<Row>
				<Section className="col my-4 py-3 flex-col">
					<div className="reviews__header">
						<div className="mx-auto flex-col mt-2 mb-4 text-center">
							<h3 className="reviews__header-large">Customer Reviews </h3>
						</div>
					</div>

					{/* ????????????????????????? */}
					<div>
						<h2>Rating from state: {rating}</h2>
						<StarRatingComponent
							name="rate1"
							starCount={10}
							value={4}
							editing={false}
							// onStarClick={this.onStarClick.bind(this)}
						/>
					</div>

					<div>
						<h2>Rating from state: {rating}</h2>
						<StarRatingComponent
							name="rate2"
							editing={false}
							renderStarIcon={() => <span></span>}
							starCount={10}
							value={8}
						/>
					</div>
				</Section>
			</Row>
		</Container>
	);
}

export default UserReviews;

const Section = styled.section`
	.reviews__header-large {
		font-family: "Rubik", sans-serif;
		font-size: 28px;
	}
`;
