import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

function Partners() {
	return (
		<Container>
			<Row>
				<Section className="flexed flex-wrap col-10">
					<div className="courier__wrap col">
						<h3 className="partners__title mb-2">Become a Courier</h3>
						<p className="partners__summary">
							Earn competitive salary as a delivery courier working with a
							flexible schedule.
						</p>
						<button className="partners__summary py-1 px-2">
							Start earning
						</button>
					</div>
					<div className="partner__wrap col"></div>
				</Section>
			</Row>
		</Container>
	);
}

export default Partners;

const Section = styled.section``;
