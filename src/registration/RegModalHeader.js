import React from "react";
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
		<nav className="mx-auto modal__wrap">
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
					}}>
					<FaTimes className="close__modal-btn" />
				</div>
			</ul>
		</nav>
	);
}

export default RegModalHeader;
