import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

function Partners() {
	return (
		<Container fluid>
			<Row>
				<Section className="flexed my-4 flex-wrap col mx-auto px-2">
					<div className="courier__wrap flexed flex-wrap mx-2 col-lg col-md-10 col-sm-10 py-4 my-3">
						<div className="courier__text col flex-col align-items-start ">
							<h3 className="partners__title mb-3">Become a Courier</h3>
							<p className="partners__summary">
								Earn competitive salary as a delivery <br /> courier working
								with a flexible schedule.
							</p>
							<button className="partners__btn">Start earning</button>
						</div>
						<div className="courier__wrap-img">
							<img src="./images/courier.png" alt="" className="" width="250" />
						</div>
					</div>
					{/*  */}
					<div className="courier__wrap flexed flex-wrap mx-3 col-lg col-md-10 col-sm-10 py-4 my-3">
						<div className="courier__text col flex-col align-items-start">
							<h3 className="partners__title mb-3">Become a Partner</h3>
							<p className="partners__summary">
								Grow your business by reaching new <br /> clients.
							</p>
							<button className="partners__btn">Partner with us</button>
						</div>
						<div className="courier__wrap-img">
							<img src="./images/chef.png" alt="" className="" width="250" />
						</div>
					</div>
				</Section>
			</Row>
		</Container>
	);
}

export default Partners;

const Section = styled.section`
	.courier__wrap:first-child {
		background: #69b3fe17;
	}

	.courier__wrap:last-child {
		background: #fea56917;
	}

	.partners__title {
		font-family: "Rubik", sans-serif;
		font-size: 28px;
		/* white-space: nowrap; */
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
		.partners__title {
			font-size: 25px;
		}

		.courier__text {
			align-items: center !important;
		}

		.partners__title,
		.partners__summary {
			text-align: center !important;
		}

		.partners__btn {
			margin: 10px auto !important;
		}

		.courier__wrap-img {
			margin: 8px auto !important;
		}
	}
`;
