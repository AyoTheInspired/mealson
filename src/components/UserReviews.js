import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { customerReviews } from "../appData";

function UserReviews() {
	const [rating, setRating] = useState(3);

	return (
		<Container fluid>
			<Row>
				<Section className="col my-4 py-3 px-3 flex-col">
					<div className="reviews__header">
						<div className="mx-auto flex-col mt-2 mb-4 text-center">
							<h3 className="reviews__header mb-0">Customer Reviews </h3>
							<div className="underline"></div>
						</div>
					</div>
					<section className="flexed flex-wrap">
						{customerReviews.map((review, id) => {
							const {
								cusName,
								datePosted,
								cusImgSrc,
								reviewText,
								filledStars,
							} = review;

							return (
								<ReviewWrap
									key={id}
									className="col-lg-3 col-md-5 col-sm mx-auto my-2 flex-col text-white">
									<div className="review__top py-2 px-3 align-items-start">
										<StarRatingComponent
											name={cusName}
											starCount={5}
											value={filledStars}
											editing={false}
											className="mr-auto star__rating "
										/>
										<p className="mb-0 review__txt">{reviewText}</p>
									</div>
									<div className="review__bottom mt-4 flexed col">
										<img
											src={cusImgSrc}
											alt={cusName}
											className="rounded-circle mr-2"
											width="50"
										/>
										<div className="review__bottom-right flex-col">
											<h5 className="mb-0 client__name text-center">
												{cusName}
											</h5>
											<p className="posted mb-0">{datePosted}</p>
										</div>
									</div>
								</ReviewWrap>
							);
						})}
					</section>

					{/* <div>
						<h2>Rating from state: {rating}</h2>
						<StarRatingComponent
							name="rate1"
							starCount={10}
							value={4}
							editing={false}
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
					</div> */}
				</Section>
			</Row>
		</Container>
	);
}

export default UserReviews;

const Section = styled.section`
	.reviews__header {
		font-family: "Rubik", sans-serif;
		font-size: 28px;
	}
`;

const ReviewWrap = styled.div`
	/* padding: 30px; */

	.review__top {
		background: #fff;
		border-radius: 5px;
		box-shadow: 1px 5px 8px #ddd;
	}

	.star__rating {
		font-size: 20px;
	}

	.review__txt,
	.client__name,
	.posted {
		color: var(--mild-gry);
	}

	.client__name {
		font-family: "Rubik", sans-serif;
		font-weight: bold;
		font-size: 14px;
		color: var(--mdl-lbl);
		white-space: nowrap;
	}

	.posted {
		font-family: "Rubik", sans-serif;
		font-size: 13px;
		font-weight: 300;
		color: #7d879c;
	}
`;
