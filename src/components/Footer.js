import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { footerMidData } from "../appData";

function Footer() {
	return (
		<Container fluid>
			<Row>
				<FooterWrap className="my-4 col">
					<FooterLeft className="col-lg-3 col-md-2 col-sm-10"></FooterLeft>
					<FooterMid className="col-lg-5 col-md-7 col-sm-10"></FooterMid>
					<FooterRight className="col-lg-3 col-md-2 col-sm-10"></FooterRight>
				</FooterWrap>
			</Row>
		</Container>
	);
}

export default Footer;

const FooterWrap = styled.footer`
	background: var(--footer-bg);
`;
