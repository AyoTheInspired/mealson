import React from "react";
import "./registration.css";
import { Link } from "react-router-dom";

function SignIn() {
	return (
		<Link to="/signin" className="modal__link">
			<div className="flexed bg-dark">
				<h3 className="text white">HEY, I'M THE SIGN-IN PAGE</h3>
			</div>
		</Link>
	);
}

export default SignIn;
