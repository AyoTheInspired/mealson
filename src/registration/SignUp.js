import React from "react";
import "./registration.css";
import { Link } from "react-router-dom";

function SignUp() {
	return (
		<Link to="/signup">
			<div className="flexed bg-dark">
				<h3 className="text white">HEY, I'M THE SIGN-UP PAGE</h3>
			</div>
		</Link>
	);
}

export default SignUp;
