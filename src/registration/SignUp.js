import React from "react";
import styled from "styled-components";
import "./registration.css";
import { Link } from "react-router-dom";

function SignUp() {
	return (
		// <Link to="/signup">
		<Wrap className="flexed bg-dark">
			<h3 className="text white sign-text">HEY, I'M THE SIGN-UP PAGE</h3>
		</Wrap>
		// </Link>
	);
}

export default SignUp;

const Wrap = styled.div`
	.sign-text {
		color: red;
	}
`;
