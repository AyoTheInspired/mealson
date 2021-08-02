import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
	Navbar,
	Nav,
	Container,
	FormControl,
	InputGroup,
} from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "../appData";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { useStateValue } from "../global-state/StateProvider";
import { actionTypes } from "../global-state/reducer";

function Navigation() {
	const [fixedNav, setFixedNav] = useState(false);
	const [searchClicked, setSearchClicked] = useState(false);
	const [burgerClicked, setBurgerClicked] = useState(false);
	const [{}, dispatch] = useStateValue();

	// window.addEventListener("scroll", () => {
	// 	if (window.scrollY >= 100) {
	// 		setFixedNav(true);
	// 	} else {
	// 		setFixedNav(false);
	// 	}
	// });

	function fixedListener() {
		if (window.scrollY >= 100) {
			setFixedNav(true);
		} else {
			setFixedNav(false);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", fixedListener);

		return () => {
			window.removeEventListener("scroll", fixedListener);
		};
	}, []);

	window.addEventListener("resize", () => {
		if (window.innerWidth <= 768) {
			setSearchClicked(true);
		} else {
			setSearchClicked(false);
		}
	});

	return (
		<>
			<StyledNavbar
				expand="lg"
				fixed="top"
				bg="dark"
				className={`${fixedNav ? "py-2" : "py-3"}`}>
				<Container className="">
					<Navbar.Brand className="mr-auto">
						<img
							src="./images/brand.png"
							alt="site-logo"
							className="site__brand text-white mr-4"
							height="30"
							width="30"
						/>
					</Navbar.Brand>
					{/* <div className="nav__right-item">
						<AiOutlineUser
							className="nav__right-icon"
							data-tip
							data-for="account"
							onClick={() => setShowModal(!showModal)}
						/>
						<StyledReactTooltip id="account" place="right" effect="solid">
							<p className="nav__right-tooltip mb-0 p-0">Account</p>
						</StyledReactTooltip>
					</div> */}
					<Navbar.Toggle aria-controls="the-nav">
						<div
							className="nav-toggler"
							onClick={() => setBurgerClicked(!burgerClicked)}>
							{burgerClicked ? <FaTimes /> : <FaBars />}
						</div>
					</Navbar.Toggle>
					<Navbar.Collapse id="the-nav">
						<Nav className="nav-wrapper ">
							<div className="nav__left flexed">
								{navItems.map((item, id) => {
									const { itemIcon, itemName, itemUrl, dropdown, hoverItems } =
										item;
									return (
										<div
											to={itemUrl}
											className="nav__item-wrap flexed mx-2"
											key={id}>
											<span className="nav__icon mb-1 mr-1"> {itemIcon} </span>

											<Tippy
												trigger={searchClicked ? "click" : "mouseenter focus"}
												interactive
												arrow={false}
												className="flexed"
												content={
													hoverItems ? (
														hoverItems.map((item, id) => {
															const { cuisineName, cuisineSource } = item;
															return (
																<div key={id + 1} className="">
																	{dropdown ? (
																		<div className="single__cuisine-wrap">
																			<h6 className="text-center single__cuisine-title p-1 my-2">
																				{" "}
																				{item}{" "}
																			</h6>
																		</div>
																	) : (
																		<div className="large__cuisine-wrap px-2">
																			<div
																				className="flex-col my-1"
																				onClick={() =>
																					dispatch({
																						type: actionTypes.OPEN_DYNAMICS,
																						payload: cuisineName,
																					})
																				}>
																				<img
																					src={cuisineSource}
																					alt="cuisine__icon"
																					className="cuisine__icon"
																					width="25"
																					height="25"
																				/>
																				<h6 className="large__cuisine-title">
																					{cuisineName}
																				</h6>
																			</div>
																		</div>
																	)}
																</div>
															);
														})
													) : (
														<h6 className="mb-0 soon__text"> {itemName} </h6>
													)
												}>
												<NavLink to={itemUrl} className="nav__link">
													{itemName}
												</NavLink>
											</Tippy>
											{dropdown && <IoMdArrowDropdown className="ml-1" />}
										</div>
									);
								})}
							</div>
							<Link
								to="/register"
								className="w-50 mx-auto d-lg-none px-3 py-1 acct__btn">
								Account
							</Link>
						</Nav>
						{searchClicked && (
							<div className="nav__form-wrap mr-2 mt-2">
								<InputGroup className="pl-3">
									<InputGroup.Prepend>
										<InputGroup.Text className="nav__form__icon-wrap">
											<AiOutlineSearch className="nav__form-icon" />
										</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl
										type="text"
										placeholder="What do you need?"
										className="nav__form-input"
									/>
								</InputGroup>
							</div>
						)}

						<div className="nav__right ml-auto flexed">
							<div className="nav__right-item mr-5">
								<AiOutlineSearch
									className="nav__right-icon"
									data-tip
									data-for="search"
									onClick={() => setSearchClicked(!searchClicked)}
								/>
								<StyledReactTooltip id="search" place="left" effect="solid">
									<p className="nav__right-tooltip mb-0 p-0">Search</p>
								</StyledReactTooltip>
							</div>
							<div className="nav__right-item">
								<Link to="/register">
									<AiOutlineUser
										className="nav__right-icon"
										data-tip
										data-for="account"
									/>
								</Link>
								<StyledReactTooltip id="account" place="right" effect="solid">
									<p className="nav__right-tooltip mb-0 p-0">Account</p>
								</StyledReactTooltip>
							</div>
						</div>
					</Navbar.Collapse>
				</Container>
			</StyledNavbar>
		</>
	);
}

export default Navigation;

const StyledNavbar = styled(Navbar)`
	transition: var(--sht-trans);
	& .nav__item-wrap:first-child {
		border-right: 1px solid gray;
		padding-right: 10px;
	}

	.nav__form-wrap {
		${(searchClicked) =>
			searchClicked
				? {
						width: "30%",
				  }
				: null};
	}

	.nav__link {
		white-space: nowrap;

		&:hover {
			text-decoration: none;
		}
	}

	& .nav__item-wrap,
	& .nav__link {
		font-size: 17px;
		color: #fff;
		transition: var(--sht-trans);

		&:hover {
			color: var(--nav-hvr) !important;
		}
	}

	& .nav__right-item {
		font-size: 25px;
		color: #fff;
		transition: var(--sht-trans);
		cursor: pointer;

		&:hover,
		&:active {
			color: var(--nav-hvr) !important;
		}
	}

	& .nav__right-tooltip {
		font-size: 12px;
	}

	.nav__right-icon {
		color: #fff;
	}

	.nav__right-icon:active {
		border: none !important;
		outline: none !important;
	}

	& .single__cuisine-wrap,
	& .large__cuisine-wrap {
		cursor: pointer;
		background: #fff;
		color: black;
		transition: var(--sht-trans);

		&:hover {
			color: #fff;
			background: #000;
			background: var(--mdl-lbl);
		}

		&:hover .large__cuisine-title {
			color: #fff;
			text-decoration: none;
		}
	}

	& .single__cuisine-title {
		font-size: 15px;
	}

	& .large__cuisine-wrap {
		padding-top: 1px;
	}

	& .large__cuisine-title {
		font-size: 12px;
		margin-top: 3px;
		color: var(--mdl-lbl);
	}

	& .soon__text {
		font-size: 12px;
	}

	@media (max-width: 768px) {
		.nav-wrapper {
			padding-left: 10px;
		}

		.nav__left {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}

		.nav__right {
			display: none;
		}

		.nav__form-wrap {
			width: 100% !important;
		}

		.nav__form__icon-wrap {
			background: var(--deep-hvr) !important;
		}

		.nav__form-icon {
			color: #fff;
			font-size: 18px;
		}

		.nav__form-input {
			border: 0 !important;
			box-shadow: none !important;
		}

		.nav__item-wrap:first-child {
			border-right: none;
		}

		.nav__item-wrap {
			margin: 5px auto;
		}

		.nav__icon {
			margin-right: 7px;
		}

		.acct__btn {
			padding: 10px 22px;
			border: 1px solid #fff;
			border-radius: 5px;
			margin: 10px;
			text-align: center;
			color: #fff;
			font-size: 18px;
			background: var(--nav-hvr);
			transition: var(--sht-trans);

			&:hover {
				background: var(--deep-hvr);
				text-decoration: none;
			}
		}

		/* .large__cuisine-wrap {
			display: flex;
			flex-direction: row !important;
		} */
	}
`;

const StyledReactTooltip = styled(ReactTooltip)`
	&:after {
		border: none !important;
		margin: 0 !important;
	}
	transition: var(--sht-trans);
`;
