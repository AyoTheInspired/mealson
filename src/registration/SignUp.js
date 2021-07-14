import React from "react";
import "./registration.css";
import { FaUserCheck, FaUserLock, FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

function SignUp() {
	return (
		<Form className="col px-0">
			<Form.Label className="reg__form-label">Full Name</Form.Label>
			<InputGroup className="mb-4">
				<InputGroup.Prepend>
					<InputGroup.Text className="form__icon-wrap" id="reg__form-fullName">
						<FaUserCheck className="reg__form-icon" />
					</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					className="reg__form-input px-3"
					placeholder="Ayo TheInspired"
					aria-label="Full Name"
					aria-describedby="reg__form-fullName"
				/>
			</InputGroup>
			<Form.Label className="reg__form-label">Email Address</Form.Label>
			<InputGroup className="mb-4">
				<InputGroup.Prepend>
					<InputGroup.Text className="form__icon-wrap" id="reg__form-firstName">
						<MdEmail className="reg__form-icon" />
					</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					className="reg__form-input px-3"
					placeholder="theinspired@gmail.com"
					aria-label="Email Address"
					aria-describedby="reg__form-firstName"
				/>
			</InputGroup>
			<Form.Label className="reg__form-label">Password</Form.Label>
			<InputGroup className="mb-3">
				<FormControl
					className="reg__form-input px-3"
					placeholder="Your Password"
					aria-label="Password"
					aria-describedby="reg__form-password"
				/>
				<InputGroup.Append>
					<Button
						variant="secondary"
						className="form__icon-btn"
						id="reg__form-password">
						<FaEye className="reg__form-append" />
					</Button>
				</InputGroup.Append>
			</InputGroup>
			<Form.Label className="reg__form-label">Confirm Password</Form.Label>
			<InputGroup className="mb-3">
				<FormControl
					className="reg__form-input px-3"
					placeholder="Confirm Password"
					aria-label="Password"
					aria-describedby="reg__form-password"
				/>
				<InputGroup.Append>
					<Button
						variant="secondary"
						className="form__icon-btn"
						id="reg__form-password">
						<FaEye className="reg__form-append" />
					</Button>
				</InputGroup.Append>
			</InputGroup>
			<button
				className="reg__form-btn mx-auto w-100 mt-2"
				onClick={(e) => e.preventDefault()}>
				Sign Up
			</button>
		</Form>
	);
}

export default SignUp;
