import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

function Partners() {
	return (
		<Container fluid>
			<Row>
				<Section className="flexed my-4 flex-wrap col mx-auto">
					<div className="courier__wrap flexed col-lg-6 col-md mx-auto col-sm">
						<div className="courier__wrap-text flex-col align-items-start">
							<h3 className="partners__title mb-3">Become a Courier</h3>
							<p className="partners__summary">
								Earn competitive salary as a delivery <br /> courier working
								with a flexible schedule.
							</p>
							<button className="partners__btn">Start earning</button>
						</div>
						<div className="courier__wrap-img">
							<img
								src="./images/courier.png"
								alt=""
								className="d-block mx-auto mx-sm-0"
								width="272"
							/>
						</div>
					</div>
					{/* <div className="courier__wrap flexed col-lg-5 col-md-4 col-sm-8 pl-5">
						<div className="courier__wrap-text d-flex flex-column justify-content-center align-items-start">
							<h3 className="partners__title mb-3">Become a Courier</h3>
							<p className="partners__summary">
								Earn competitive salary as a delivery <br /> courier working
								with a flexible schedule.
							</p>
							<button className="partners__btn">Start earning</button>
						</div>
						<img
							src="./images/courier.png"
							alt=""
							className="courier__wrap-img d-block w-50"
						/>
					</div> */}
					{/* <div className="partner__wrap col"></div> */}
				</Section>
			</Row>
		</Container>
	);
}

export default Partners;

const Section = styled.section`
	padding: 80px;

	.courier__wrap {
		padding-left: 10px !important;
	}

	.courier__wrap:first-child {
		background: #69b3fe17;
		/* margin-right: 30px; */

		@media (max-width: 768px) {
			margin-right: auto;
			margin-left: auto;
		}
	}

	.courier__wrap:last-child {
		background: #fea56917;
	}

	/* .courier__wrap-img {
		max-width: 100%;
		max-height: 100%;
	} */

	.partners__title {
		font-family: "Rubik", sans-serif;
		font-size: 32px;
		/* white-space: nowrap; */
		/* margin-bottom: 25px; */
	}

	.partners__summary {
		font-family: "Rubik", sans-serif;
		font-size: 16px;
		color: #7d7879;
	}

	.partners__btn {
		outline: none;
		border: none;
		padding: 10px 22px;
		color: #fff;
		font-size: 15px;
		font-family: "Rubik", sans-serif;
		background: var(--nav-hvr);
		border-radius: 7px;
		transition: var(--sht-trans);

		&:hover {
			background: var(--deep-hvr);
		}
	}

	@media (max-width: 425px) {
		/* .courier__wrap-text {
			display: block !important;
		} */
		/* .partners__title,
		.partners__summary {
			text-align: center;
		} */
	}
`;
