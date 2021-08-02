import React, { useState } from "react";
import styled from "styled-components";
import UserLogin from "../registration/UserLogin";
import SignUp from "../registration/SignUp";
import { Container, Row } from "react-bootstrap";
import RegModalHeader from "../registration/RegModalHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function RegModal() {
	const [defaultModalView, setDefaultModalView] = useState(true);

	return (
		<Router>
			<Container fluid>
				<Row>
					<Section className="flexed col mx-auto">
						<Wrap className="flex-col col-lg-4 col-md-8 col-sm p-3 mx-auto">
							<Header className="col">
								<RegModalHeader
									defaultModalView={defaultModalView}
									setDefaultModalView={setDefaultModalView}
								/>
							</Header>
							<Body className="col modal__body">
								{defaultModalView && <UserLogin />}
								<Switch>
									<Route path="/signup" exact component={SignUp} />
									<Route path="/signin" exact component={UserLogin} />
								</Switch>
							</Body>
						</Wrap>
					</Section>
				</Row>
			</Container>
		</Router>
	);
}

export default RegModal;
const Section = styled.section`
	min-height: calc(100vh - 74px);
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
		url("./images/heroe.jpg") center/cover no-repeat fixed;
`;

const Wrap = styled.section`
	background: #f1f7f8;
	border-radius: 5px;
	box-shadow: 0px 15px 10px rgba(1, 1, 1, 0.8);
`;

const Header = styled.div``;

const Body = styled.div``;
