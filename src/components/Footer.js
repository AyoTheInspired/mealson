import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Dropdown } from "react-bootstrap";
import { footerLeftData, footerMidData } from "../appData";
import { FaTrademark } from "react-icons/fa";

function Footer() {
	return (
		<Container fluid>
			<Row>
				<FooterWrap className="my-4 col p-3">
					<FooterLeft className="col-lg-3 px-0 col-md-2 col-sm-10 flex-col text-white">
						<div className="left__wrap flexed mb-3">
							<h3 className="footer__left-title">Mealson</h3>
							<span className="trademark">
								<FaTrademark />
							</span>
						</div>

						<Tippy
							className=""
							interactive
							trigger="click"
							placement="bottom"
							arrow={false}
							content={
								<div className="footer__tip-wrap col">
									{footerLeftData.map((item, id) => {
										const { flagSrc, name } = item;

										return (
											<li key={id} className="footer__left-item flexed my-2">
												<img
													src={flagSrc}
													alt={name}
													className="footer__left-flag me-2"
													width="20"
												/>{" "}
												<p className="mb-0 footer__left-name">{name}</p>
											</li>
										);
									})}
								</div>
							}>
							<TitleWrap className="flexed">
								<img
									src="./images/ng.png"
									alt="us-flag"
									className="footer__left-flag mr-2"
									width="20"
								/>
								<span className="footer__left-text mr-1">NGN</span>
								<IoMdArrowDropdown className="footer__left-arrow" />
							</TitleWrap>
						</Tippy>
					</FooterLeft>
					<FooterMid className="col-lg-5 col-md-7 col-sm-10"></FooterMid>
					<FooterRight className="col-lg-3 col-md-2 col-sm-10"></FooterRight>
				</FooterWrap>
			</Row>
		</Container>
	);
}

export default Footer;

const FooterWrap = styled.footer`
	background: var(--footer-bg);
`;

const FooterLeft = styled.div`
	.left__wrap {
		position: relative;
	}

	.trademark {
		font-size: 15px;
		position: absolute;
		right: -15px;
		top: -7px;
	}

	.footer__tip-wrap {
		min-width: 120px;
	}

	.footer__left-item {
		list-style-type: none;
		cursor: pointer;
		transition: var(--sht-trans);

		&:hover {
			padding-left: 10px;
		}

		&:hover .footer__left-name {
			color: var(--nav-hvr);
		}
	}

	.footer__left-name {
		margin-left: 8px;
		font-family: "Rubik", sans-serif;
		font-size: 14px;
	}
`;

const TitleWrap = styled.div`
	cursor: pointer;
	transition: var(--sht-trans);
	border: 1px solid grey;
	border-radius: 3px;
	padding: 6px;
	font-family: "Rubik", sans-serif;
	font-size: 13px;

	&:hover {
		background: #fff;
		color: var(--mdl-lbl);
	}

	.footer__left-arrow {
		font-size: 20px;
	}
`;

const FooterMid = styled.div``;

const FooterRight = styled.div``;
