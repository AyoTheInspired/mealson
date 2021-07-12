import React, { useState } from "react";
import styled from "styled-components";
import { FaLock, FaUserAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./registration.css";

function RegModalHeader({
	showModal,
	setShowModal,
	defaultModalView,
	setDefaultModalView,
}) {
	return (
		<nav className="mx-auto modal__wrap bg-danger">
			<ul className="modal__header d-flex justify-content-between align-items-center p-2 mr-auto">
				<Link
					to="signin"
					className="modal__header-left flexed mr-3"
					onClick={() => setDefaultModalView(false)}>
					<span className="modal__item-icon mr-1 ">
						<FaLock />
					</span>
					<h6 className="mb-0 mt-1 modal__item-text">Sign In</h6>
				</Link>
				<Link
					to="/signup"
					className="modal__header-left flexed mr-auto"
					onClick={() => setDefaultModalView(false)}>
					<span className="modal__item-icon mr-1 ">
						<FaUserAlt />
					</span>
					<h6 className="mb-0 mt-1 modal__item-text">Sign Up</h6>
				</Link>
				<div
					className="modal__header-right"
					onClick={() => {
						setShowModal(!showModal);
						setDefaultModalView(true);
					}}>
					<FaTimes className="close__modal-btn" />
				</div>
			</ul>
		</nav>
	);
}

export default RegModalHeader;

const Container = styled.section`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	z-index: 10;
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));

	.modal__header {
		/* background: #f1f7f8; */
	}

	.modal__header-left {
		list-style-type: none;
		cursor: pointer;
	}

	/* .modal__content {
		background: red !important;
	} */

	& .modal__item-text {
		font-family: "Rubik", sans-serif;
		font-size: 15px !important;
		color: brown !important;
	}
`;

const Wrap = styled.section``;
