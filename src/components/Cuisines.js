import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Card } from "react-bootstrap";
import styled from "styled-components";
import { useStateValue } from "../global-state/StateProvider";

function Cuisines() {
	const [meals, setMeals] = useState({});
	const [menu, setMenu] = useState([]);
	const [loading, setLoading] = useState(true);
	const [{ cuisineItem, category }, dispatch] = useStateValue();

	const APP_KEY = "ef7e048992b49a3a6223bee27304eacc";

	const APP_ID = "eac8567b";

	const startingPoint = Math.floor(Math.random() * 70);

	const url = `https://api.edamam.com/search?q=${category}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${startingPoint}&to=${
		startingPoint + 12
	}`;

	const getCuisines = async () => {
		setLoading(true);
		await fetch(url)
			.then((response) =>
				response.json().then((data) => {
					setLoading(false);
					setMenu(data.hits);
				})
			)
			.catch((err) => alert(err.message));
	};

	useEffect(() => {
		getCuisines();
	}, [category]);

	return (
		<Container fluid>
			<Row>
				<Section className="col">
					<div className="px-3 py-4 dynamics__wrapper">
						<div className="dynamics__header ml-auto d-flex justify-content-center align-items-start">
							<div className="mx-auto col">
								<h3 className="mb-2 dynamics__header-text text-center">
									AVAILABLE CUISINES FOR &nbsp;
									<span className="dynamics__header-cuisineItem">
										{cuisineItem?.toUpperCase() || (
											<span className="cuisine__select">
												Select a Cuisine Type
											</span>
										)}
									</span>
									<div className="underline-sm"></div>
								</h3>
							</div>
						</div>

						<div className="dynamics__body flexed flex-wrap py-3">
							{loading ? (
								<h3 className="mb-0 fetching__title text-white">
									FETCHING DATA...
								</h3>
							) : (
								menu.map((menu, id) => {
									const { label, image, dishType } = menu.recipe;
									return (
										<Card
											key={id + 1}
											className="col-lg-3 col-md-5 col-sm-8 mx-2 mt-2 cuisine__card">
											<Card.Img
												variant="top"
												src={image}
												className="cuisine__image"
												alt={label}
											/>
											<Card.Body className="cuisine__body flex-col">
												<h5 className="cuisine__label text-center">{label}</h5>
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

	.cuisine__select,
	.dynamics__header-cuisineItem {
		color: var(--nav-hvr);
	}

	.dynamics__body {
		min-height: 70vh !important;
	}

	.fetching__title {
		font-family: "Rubik", sans-serif;
		letter-spacing: 0.3px;
		font-weight: 600;
	}

	.cuisine__card {
		padding: 0 0 !important;
		box-shadow: 0px 0px 2px #f1f7f8;
	}

	.cuisine__body {
		padding: 10px 5px 5px 5px !important;
	}

	.cuisine__image {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		object-fit: cover;
		height: 40vh;
	}

	.cuisine__label {
		font-family: "Rubik", sans-serif;
		letter-spacing: 0.2px;
		font-size: 18px;
		line-height: 1.4rem;
	}
`;
