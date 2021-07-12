import React from "react";
import "./registration.css";
import styled from "styled-components";
import { FaUserCheck, FaUserLock } from "react-icons/fa";
import { Form, InputGroup, FormControl } from "react-bootstrap";

function SignIn() {
	return (
		<Form className="col px-0">
			<Form.Label className="reg__form-label">Email address</Form.Label>
			<InputGroup className="mb-4">
				<InputGroup.Prepend>
					<InputGroup.Text className="form__icon-wrap" id="reg__form-username">
						<FaUserCheck className="reg__form-icon" />
					</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					className="reg__form-input px-3"
					placeholder="theinspired@gmail.com"
					aria-label="Email Address"
					aria-describedby="reg__form-username"
				/>
			</InputGroup>
			<Form.Label className="reg__form-label">Password</Form.Label>
			<InputGroup className="mb-4">
				<InputGroup.Prepend>
					<InputGroup.Text className="form__icon-wrap" id="reg__form-password">
						<FaUserLock className="reg__form-icon" />
					</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					className="reg__form-input px-3"
					placeholder="Your Password"
					aria-label="Password"
					aria-describedby="reg__form-password"
				/>
			</InputGroup>

			<Form.Group
				controlId="formBasicCheckbox"
				className="d-flex justify-content-between">
				<Form.Check type="checkbox" className="flexed" label="Remember Me" />
				<a href="#" className="mb-0 reg__form-fpwd" rel="noreferrer noopener">
					Forgot Password?
				</a>
			</Form.Group>

			<button
				className="reg__form-btn mx-auto w-100"
				onClick={(e) => e.preventDefault()}>
				Sign In
			</button>
		</Form>
	);
}

export default SignIn;

const Wrap = styled.div``;
