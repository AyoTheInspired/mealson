import React, { useState } from "react";
import styled from "styled-components";
import { menuItems } from "../appData";
import { Container, Row, Card, Toast } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { BiDish } from "react-icons/bi";

function TrendingFood() {
	const [trayClicked, setTrayClicked] = useState(false);
	let [trayTitle, setTrayTitle] = useState("");

	return (
		<Container fluid>
			<Row>
				<Section className="trending__wrap px-0">
					<Slide bottom>
						<div className="trending__header">
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
						<ToastContainer position="top-center" className="toast__wrap">
							<Toast
								onClose={() => setTrayClicked(false)}
								show={trayClicked}
								delay={3000}
								autohide>
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

						<div className="menu-wrap flexed flex-wrap p-4">
							{menuItems.map((menu, id) => {
								const { itemImgSrc, itemTitle } = menu;

								return (
									<>
										<Card
											key={id}
											className="menu__card col-sm col-md-4 col-lg-3 m-3">
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
														<h6 className="mb-0 meal__tray-text">
															Add to tray
														</h6>
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
															{" "}
															{itemTitle}{" "}
														</h5>
													</Fade>
												</Card.Title>
											</Card.Body>
										</Card>
									</>
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
`;

const ToastContainer = styled.div`
	position: fixed;
	left: 50%;
	top: 20%;
	transform: translateX(-50%);
	z-index: 15;
`;
