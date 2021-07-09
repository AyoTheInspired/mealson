import React from "react";
import styled from "styled-components";
import { menuItems } from "../appData";
import { Container, Row, Card } from "react-bootstrap";

function TrendingFood() {
	return (
		<Container fluid>
			<Row>
				<Section className="trending__wrap px-0">
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
					<div className="trending__body  mx-auto">
						<div className="trending__body-title">
							<h3 className="text-center mb-0">Our Menu</h3>
						</div>
						<div className="menu-wrap flexed flex-wrap p-4">
							{menuItems.map((menu, id) => {
								const { itemImgSrc, itemTitle } = menu;

								return (
									<Card
										key={id}
										className="menu__card col-sm col-md-4 col-lg-3 m-3">
										<div className="card__img-wrap">
											<Card.Img
												className="card-img"
												variant="top"
												src={itemImgSrc}></Card.Img>
										</div>
										<Card.Body className="card__body py-2">
											<Card.Title>
												<h5 className="mb-0 menu__title mt-2 text-center">
													{" "}
													{itemTitle}{" "}
												</h5>
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
	background: #f1f7f8;
	& .trending__header-large {
		font-family: "Rubik", sans-serif;
	}

	& .trending__header-small {
		color: var(--mild-gry);
	}

	.menu__card {
		cursor: pointer;
		padding: 0 0 !important;
		box-shadow: 0px 1px 15px #ddd;
	}

	.card-img {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.card__body {
		background: var(--nav-hvr) !important;
		transition: var(--sht-trans);
		&:hover {
			background: var(--deep-hvr) !important;
			color: #fff;
		}
	}
`;
