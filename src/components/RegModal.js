import React, { useState } from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import { Modal, Button } from "react-bootstrap";
import { FaLock, FaUser, FaTimes } from "react-icons/fa";

function RegModal({ showModal, setShowModal }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container className="flexed">
			<Slide top>
				<nav className="mx-auto col-5 bg-warning modal__wrap">
					<ul className="modal__header d-flex justify-content-between align-items-center p-2 text-white">
						<li className="modal__header-left flexed">
							{/* <div className="modal__left-wrap">
							<div className="modal__title-item flexed"> */}
							<span className="modal__item-icon mr-1 ">
								<FaLock />
							</span>
							<h6 className="mb-0 mt-2 modal__item-text">Sign in</h6>
							{/* </div>
						</div> */}
							<div className="modal__right-wrap"></div>
						</li>
						<div
							className="modal__header-right"
							onClick={() => setShowModal(!showModal)}>
							<FaTimes className="close__modal-btn" />
						</div>
					</ul>
					<div className="modal__header">modal body</div>
				</nav>
			</Slide>
		</Container>

		// <ModalWrap>
		// 	<Button variant="primary" onClick={handleShow}>
		// 		Launch demo modal
		// 	</Button>

		// 	<Modal
		// 		aria-labelledby="contained-modal-title-vcenter"
		// 		centered
		// 		show={show}
		// 		className="modal__content"
		// 		onHide={handleClose}
		// 		animation={false}>
		// 		<Modal.Header closeButton>
		// 			<Modal.Title className="modal__titie-wrap">
		// 				<div className="mr-auto">
		// 					<div className="modal__title-item flexed">
		// 						<span className="modal__item-icon mr-1">
		// 							<FaLock />
		// 						</span>{" "}
		// 						<h6 className="mb-0 modal__item-text">Sign in</h6>
		// 					</div>
		// 				</div>
		// 			</Modal.Title>
		// 		</Modal.Header>
		// 		<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
		// 		<Modal.Footer>
		// 			<Button variant="secondary" onClick={handleClose}>
		// 				Close
		// 			</Button>
		// 			<Button variant="primary" onClick={handleClose}>
		// 				Save Changes
		// 			</Button>
		// 		</Modal.Footer>
		// 	</Modal>
		// </ModalWrap>
	);
}

export default RegModal;

// const Button = styled.button`
// 	min-width: 100px;
// 	padding: 16px 32px;
// 	border-radius: 4px;
// 	border: none;
// 	background: black;
// 	color: #fff;
// 	font-size: 24px;
// 	cursor: pointer;
// `;

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
	}

	.modal__content {
		background: red !important;
	}

	& .modal__item-text {
		font-family: "Rubik", sans-serif;
		font-size: 15px !important;
		color: red !important;
	}

	.close__modal-btn {
		font-size: 20px;
		cursor: pointer;
	}
`;
