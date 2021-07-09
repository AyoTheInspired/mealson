import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { FaGooglePlay, FaApple } from "react-icons/fa";

function MobileSection() {
	return (
		<Container fluid>
			<Row>
				<Section className="col d-flex flex-wrap justify-content-center align-items-center py-3 mx-auto">
					<div className="order-wrap col-lg-5 col-md-5 col-sm-10 mx-auto">
						<h2 className="order__top mb-3">
							Order food on the go with the <br /> Mealson App
						</h2>

						<h5 className="order__mid mb-0">
							Pay with in app wallet, collect loyalty points, <br /> track your
							orders in real time, and much more.
						</h5>

						<div className="store__wrap col pl-0 flexed mt-4">
							<img
								src="./images/app-store.png"
								alt=""
								className="store__img w-25"
							/>
							<img
								src="./images/gplay-badge.png"
								alt=""
								className="store__img w-25 mr-auto"
							/>
						</div>
					</div>
					<div className="phone-wrap mt-4 flexed col-lg-5 col-md-5 col-sm-10 mx-auto">
						<img
							src="./images/phone.png"
							alt=""
							className="phone__wrap-img w-75"
						/>
					</div>
				</Section>
			</Row>
		</Container>
	);
}

export default MobileSection;

export const Section = styled.section`
	background: var(--mid-pink);
	min-height: 500px;

	.order__top {
		font-family: "Rubik", sans-serif;
		font-size: 2.3rem;
		font-weight: 500;
		color: #fff;
	}

	.order__mid {
		font-family: "Rubik", sans-serif;
		font-size: 16px;
		color: #ffffff;
		font-weight: 400;
		opacity: 0.9;
		letter-spacing: 0.7px;
	}

	.store__wrap {
		/* max-width: 70%; */
		/* cursor: pointer;
		background: #000;
		border-radius: 10px; */
	}

	.store__inner {
		background: #fff;
		color: #000;
		border-radius: 5px;
	}

	/* .store__img {
		max-width: 70%;
	} */

	.store__img:first-child {
		margin-right: 10px;
	}

	.store__top {
		font-family: "Rubik", sans-serif;
		font-size: 11px;
		color: #000;
		font-weight: bold;
	}

	.store__bottom {
		font-family: "Rubik", sans-serif;
		color: #fff;
		font-size: 15px;
		font-weight: bold;
	}
`;
