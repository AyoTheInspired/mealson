import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

function Footer() {
	return (
		<Container fluid>
			<Row>
				<FooterWrap className="my-4 col">IM THE FOOTER</FooterWrap>
			</Row>
		</Container>
	);
}

export default Footer;

const FooterWrap = styled.footer``;
