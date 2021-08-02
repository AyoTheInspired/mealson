import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { menuItems } from "../appData";
import { Container, Row, Card, Toast } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { BiDish } from "react-icons/bi";
import { useStateValue } from "../global-state/StateProvider";
import actionTypes from "../global-state/reducer";
import { FaTimes } from "react-icons/fa";

function TrendingFood() {
	const [trayClicked, setTrayClicked] = useState(false);
	let [trayTitle, setTrayTitle] = useState("");
	const [{ cuisineClicked, cuisineItem }, dispatch] = useStateValue();

	const API_KEY = "f81207052edb439981703a89b22f0297";

	useEffect(() => {
		const getCuisines = () => {
			fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`
			).then((response) =>
				response.json().then((data) => {
					console.log(data);
				})
			);
		};
		getCuisines();
	});

	return (
		<Container fluid>
			<Row>
				<Section id="dynamics" className="trending__wrap px-0">
					{cuisineClicked && (
						<div className="col bg-dark p-4 dynamics__wrapper">
							<div className="dynamics__header col-lg ml-auto d-flex justify-content-between align-items-center">
								<img src="/images/brand.png" width="40" alt="" />
								<h3 className="text-white text-center mb-0 dynamics__header-text">
									AVAILABLE CUISINES FOR &nbsp;
									<span className="dynamics__header-cuisineItem">
										{cuisineItem?.toUpperCase()}
									</span>
								</h3>
								<FaTimes className="dynamics__header-close" />
							</div>
							<div className="underline-sm"></div>
						</div>
					)}
					<Slide bottom>
						<div className="trending__header" id="trending">
							<div className="mx-auto flex-col mt-5 mb-4 text-center">
								<h3 className="trending__header-large">
									Trending food in your city
								</h3>
								<h6 className="mb-0 trending__header-small">
									Place your order, and we'll have it delivered in no time!
									<div className="underline"></div>
								</h6>
							</div>
						</div>
					</Slide>
					<div className="trending__body  mx-auto">
						<Slide bottom>
							<div className="trending__body-title">
								<h3 className="text-center mb-0">Our Menu</h3>
							</div>
						</Slide>

						{trayClicked && (
							<ToastContainer
								position="top-center"
								className="toast__wrap p-5 col-lg-6">
								<Toast
									onClose={() => setTrayClicked(false)}
									show={trayClicked}
									delay={3000}
									autohide
									className="mx-auto">
									<Toast.Header className="d-flex justify-content-between align-items-center toast__header">
										<img
											src="./images/brand.png"
											className="my-1"
											width="30"
											height="30"
											alt=""
										/>
										<strong className="me-auto">Mealson</strong>
									</Toast.Header>
									<Toast.Body>
										<h5 className="toast__msg text-center">
											<span className="tray__title mr-1">{trayTitle}</span> has
											been added to tray.
										</h5>
									</Toast.Body>
								</Toast>
							</ToastContainer>
						)}

						<div className="menu-wrap flexed flex-wrap p-4">
							{menuItems.map((menu, id) => {
								const { itemImgSrc, itemTitle } = menu;

								return (
									<Card
										key={id}
										className="menu__card col-sm-10 col-md-5 col-lg-3 m-3">
										<div className="card__img-wrap">
											<div className="meal__tray-wrap flexed">
												<button
													className="meal__tray-btn flexed"
													onClick={(e) => {
														setTrayClicked(true);
														setTrayTitle(itemTitle);
													}}>
													<span className="meal__tray-icon mb-1 mr-1">
														<BiDish />
													</span>{" "}
													<h6 className="mb-0 meal__tray-text">Add to tray</h6>
												</button>
											</div>
											<Card.Img
												className="card-img"
												variant="top"
												src={itemImgSrc}
											/>
										</div>
										<Card.Body className="card__body py-2">
											<Card.Title>
												<Fade bottom>
													<h5 className="mb-0 menu__title mt-2 text-center">
														{itemTitle}
													</h5>
												</Fade>
											</Card.Title>
										</Card.Body>
									</Card>
								);
							})}
						</div>
					</div>
				</Section>
			</Row>
		</Container>
	);
}

export default TrendingFood;

const Section = styled.section`
	position: relative;
	background: #f1f7f8;
	& .trending__header-large {
		font-family: "Rubik", sans-serif;
	}

	& .trending__header-small {
		color: var(--mild-gry);
		font-size: 20px;
	}

	.menu__card {
		padding: 0 0 !important;
		box-shadow: 0px 1px 15px #ddd;
	}

	.menu__title {
		color: #fff;
	}

	.card__img-wrap {
		position: relative;
	}

	.card__img-wrap:hover .meal__tray-wrap {
		display: flex;
		opacity: 1;
	}

	.meal__tray-wrap {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
		opacity: 0;
		transition: var(--sht-trans);
	}

	.meal__tray-text {
		color: var(--mild-gry);
		font-family: "Rubik", sans-serif;
		font-size: 15px;
		transition: var(--sht-trans);
	}

	.meal__tray-icon {
		font-size: 20px;
		color: var(--mild-gry);
		transition: var(--sht-trans);
	}

	.meal__tray-btn {
		outline: none;
		border: 1px solid #fff;
		border-radius: 5px;
		padding: 5px 11px;
		background: var(--nav-hvr);
		transition: var(--sht-trans);

		&:hover {
			background: var(--deep-hvr);
		}

		&:hover .meal__tray-text,
		&:hover .meal__tray-icon {
			color: #fff;
		}
	}

	.card-img {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.card__body {
		background: var(--nav-hvr) !important;
		background: var(--deep-hvr) !important;
		transition: var(--sht-trans);
		&:hover {
			background: var(--deep-hvr) !important;
			color: #fff;
		}
	}

	.toast__header {
		background: var(--deep-hvr);
		color: #fff;
	}

	.toast__msg {
		font-family: "Rubik", sans-serif;
		font-size: 18px;
	}

	.tray__title {
		color: var(--nav-hvr);
	}

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
				transform: scale(1.05);
				color: var(--nav-hvr);
			}
		}
	}
`;

const ToastContainer = styled.div`
	position: fixed;
	left: 50%;
	top: 20%;
	transform: translateX(-50%);
	z-index: 15;
	background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
`;
