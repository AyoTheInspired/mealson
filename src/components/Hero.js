import React from "react";
import styled from "styled-components";
import { Container, Row, Dropdown, Button } from "react-bootstrap";

function Hero() {
	return (
		<HeroSection className="flexed hero__section">
			<Container>
				<Row>
					<div className="hero__text-wrap mx-auto flex-col">
						<div className="hero__top">
							<h4 className="mb-0 top__div-text">
								#1 Food Delivery Service since 2010
							</h4>
						</div>

						<div className="hero__mid">
							<h2 className="major-text mb-0">
								We deliver your favorite food fresh & fast in
							</h2>
						</div>

						<div className="hero__third">
							<button className="hero__btn py-2 px-3">
								<h4 className="mb-0 hero__btn-text">
									What would you like to eat?
								</h4>
							</button>
						</div>
					</div>
				</Row>
			</Container>
		</HeroSection>
	);
}

export default Hero;

const HeroSection = styled.section`
	min-height: calc(100vh - 59px);
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url("./images/hero-bg.jpg") center/cover no-repeat fixed;
`;
