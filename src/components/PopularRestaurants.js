import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { restaurants } from "../appData";

function PopularRestaurants() {
	return (
		<Container>
			<Row>
				<Section className="flex-col my-4 col">
					<div className="popular__header">
						<div className="mx-auto flex-col mt-5 mb-4 text-center">
							<h3 className="popular__header-large">
								Popular Restaurants in your city
							</h3>
							<h6 className="mb-0 popular__header-small">
								Check out the best restaurants near you.
								<div className="underline"></div>
							</h6>
						</div>
					</div>
					<Wrap className="flexed flex-wrap col mx-auto py-3">
						{restaurants.map((restaurant, idx) => {
							const { resLogo } = restaurant;

							return (
								<img
									src={resLogo}
									alt={resLogo}
									className="res__img w-25 p-3 mx-3 my-2"
								/>
							);
						})}
					</Wrap>
				</Section>
			</Row>
		</Container>
	);
}

export default PopularRestaurants;

const Section = styled.section`
	.popular__header-large {
		font-family: "Rubik", sans-serif;
	}

	.popular__header-small {
		color: var(--mild-gry);
		font-size: 20px;
	}
`;

const Wrap = styled.div`
	.res__img {
		cursor: pointer;
		width: 22% !important;
		box-shadow: 1px 3px 12px #ddd;
		border-radius: 5px;

		@media (max-width: 450px) {
			width: 40% !important;
			margin: 20px auto !important;
		}
	}
`;
