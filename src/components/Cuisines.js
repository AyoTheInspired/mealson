import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Card } from "react-bootstrap";
import styled from "styled-components";
import { useStateValue } from "../global-state/StateProvider";

function Cuisines() {
	const { cuisineName } = useParams();
	const [meals, setMeals] = useState({});
	const [menu, setMenu] = useState([]);
	const [loading, setLoading] = useState(true);
	const [{ cuisineItem, category }, dispatch] = useStateValue();

	const APP_KEY = "ef7e048992b49a3a6223bee27304eacc";

	const APP_ID = "eac8567b";

	const url = `https://api.edamam.com/search?q=${category}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`;

	const getCuisines = async () => {
		await fetch(url)
			.then((response) =>
				response.json().then((data) => {
					// console.log(data);
					setLoading(false);
					setMenu(data.hits);
				})
			)
			.catch((err) => alert(err.message));
	};

	useEffect(() => {
		getCuisines();
	}, [category]);

	console.log(menu);

	return (
		<Container fluid>
			<Row>
				<Section className="col">
					<div className="px-3 py-4 dynamics__wrapper">
						<div className="dynamics__header ml-auto d-flex justify-content-center align-items-start">
							<img src="/images/brand.png" width="40" alt="logo" />
							<div className="mx-auto col">
								<h3 className="mb-3 dynamics__header-text text-center">
									AVAILABLE CUISINES FOR &nbsp;
									<span className="dynamics__header-cuisineItem">
										{cuisineItem?.toUpperCase()}
									</span>
									<div className="underline-sm"></div>
								</h3>
							</div>
						</div>

						<div className="dynamics__body flexed flex-wrap py-3">
							{loading ? (
								<h3 className="mb-0 fetching__title">FETCHING DATA...</h3>
							) : (
								menu.map((menu, id) => {
									const { label, image, cuisineType } = menu.recipe;
									return (
										<Card
											key={id + 1}
											className="col-lg-3 col-md-5 col-sm-10 m-2 cuisine__card">
											<Card.Img
												variant="top"
												src={image}
												className="cuisine__image"
												alt={label}
												// width="500"
												// height="20"
											/>
											<Card.Body className="cuisine__body flexed">
												<h5 className="cuisine__type mb-0 text-center">
													{label}
												</h5>
												<p className="text-center text-dark cuisine__name"></p>
											</Card.Body>
										</Card>
									);
								})
							)}
						</div>
					</div>
				</Section>
			</Row>
		</Container>
	);
}

export default Cuisines;

const Section = styled.section`
	min-height: calc(100vh - 75px);
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
		url("/images/heroe.jpg") center/cover no-repeat fixed;

	.dynamics__header-text {
		font-family: "Rubik", sans-serif;
		letter-spacing: 0.3px;
		font-size: 25px;
		color: #fff;
	}

	.dynamics__body {
		min-height: 70vh !important;
	}

	.fetching__title {
		font-family: "Rubik", sans-serif;
		letter-spacing: 0.3px;
		/* font-size: 25px; */
		font-weight: 600;
	}

	.cuisine__card {
		padding: 0 0 !important;
		box-shadow: 0px 1px 15px #ddd;
	}

	.cuisine__body {
		padding: 10px 0 !important;
	}

	.cuisine__image {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		object-fit: cover;
		height: 40vh;
		/* width: 20vw; */
	}

	.cuisine__type {
		font-family: "Rubik", sans-serif;
		letter-spacing: 0.2px;
		font-size: 18px;
	}

	/* .dynamics__header-close {
			color: #fff;
			font-size: 22px;
			cursor: pointer;
			transition: var(--sht-trans);

			&:hover {
				transform: scale(1.3);
				color: var(--nav-hvr);
			}
		} */
`;
