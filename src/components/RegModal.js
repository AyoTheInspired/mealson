import React, { useState } from "react";
import styled from "styled-components";
import SignUp from "../registration/SignUp";
import SignIn from "../registration/SignIn";
import RegModalHeader from "../registration/RegModalHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function RegModal({ showModal, setShowModal }) {
	const [defaultModalView, setDefaultModalView] = useState(true);

	return (
		<Router>
			<Container className="flexed">
				<Wrap className="flex-col col-lg-5 col-md-6 col-sm-8 mx-auto p-3">
					<Header className="col">
						<RegModalHeader
							defaultModalView={defaultModalView}
							setDefaultModalView={setDefaultModalView}
							showModal={showModal}
							setShowModal={setShowModal}
						/>
					</Header>
					<Body className="col modal__body">
						<Switch>
							<Route path="/signup" exact component={SignUp} />
							<Route path="/signin" exact component={SignIn} />
						</Switch>
					</Body>
				</Wrap>
			</Container>
		</Router>
	);
}

export default RegModal;

const Container = styled.section`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	z-index: 10;
	background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
`;

const Wrap = styled.section`
	background: #f1f7f8;
	border-radius: 5px;
	box-shadow: 0px 15px 10px rgba(1, 1, 1, 0.8);
`;

const Header = styled.div``;

const Body = styled.div``;
