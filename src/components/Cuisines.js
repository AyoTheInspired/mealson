import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useStateValue } from "../global-state/StateProvider";

function Cuisines() {
	const { cuisineName } = useParams();
	const [meals, setMeals] = useState({});
	const [menu, setMenu] = useState([]);
	const [loading, setLoading] = useState(true);
	const [{ cuisineItem }, dispatch] = useStateValue();

	const APP_KEY = "ef7e048992b49a3a6223bee27304eacc";

	const APP_ID = "eac8567b";

	const url = `https://api.edamam.com/search?q=chinese&app_id=${APP_ID}&app_key=${APP_KEY}`;

	const getCuisines = async () => {
		await fetch(url).then((response) =>
			response.json().then((data) => {
				console.log(data);
				setLoading(false);
				setMenu(data.hits);
			})
		);
	};

	return (
		<Container fluid>
			<Row>
				<Section className="col">
					<div className="p-3 dynamics__wrapper">
						<div className="dynamics__header ml-auto d-flex justify-content-center align-items-center">
							<img
								src="/images/brand.png"
								width="40"
								// className="mr-auto"
								alt="logo"
							/>
							<div className="mx-auto col">
								<h3 className="text-dark mb-0 dynamics__header-text text-center">
									AVAILABLE CUISINES FOR &nbsp;
									<span className="dynamics__header-cuisineItem">
										{cuisineItem?.toUpperCase()}
									</span>
									<div className="underline-sm"></div>
								</h3>
							</div>
						</div>

						<div className="dynamics__body flex-col">
							{loading
								? "ITS LOADING"
								: menu.map((recipe, id) => {
										return (
											<div key={id + 1}>
												<p className="text-center text-dark">
													{recipe.recipe.label}
												</p>
											</div>
										);
								  })}
							<button className="d-block" onClick={getCuisines} cons>
								GET CUISINES
							</button>
						</div>
						{/* {loading ? "ITS LOADING" : "NO ITS NOT LOADING"} */}
					</div>
				</Section>
			</Row>
		</Container>
	);
}

export default Cuisines;

const Section = styled.section`
	min-height: calc(100vh - 75px);

	.dynamics__wrapper {
		min-height: 300px;

		.dynamics__header-text {
			font-family: "Rubik", sans-serif;
			letter-spacing: 0.3px;
			font-size: 25px;
		}

		.dynamics__header-close {
			color: #fff;
			font-size: 22px;
			cursor: pointer;
			transition: var(--sht-trans);

			&:hover {
				transform: scale(1.3);
				color: var(--nav-hvr);
			}
		}
	}
`;
