import React from "react";
import "./registration.css";
import styled from "styled-components";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignIn({ defaultModalView, setDefaultModalView }) {
	return (
		// <Link to="/signin" className="modal__link">
		<Wrap className="flexed modal__form-wrap">
			<Form className="col px-0">
				<InputGroup>
					<InputGroup.Prepend>
						<InputGroup.Text id="reg__form-username">@</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Email Address"
						aria-label="Email Address"
						aria-describedby="reg__form-username"
					/>
				</InputGroup>
			</Form>
			{/* <h3 className="text white">HEY, I'M THE SIGN-IN PAGE</h3> */}
		</Wrap>
		// </Link>
	);
}

export default SignIn;

const Wrap = styled.div``;
