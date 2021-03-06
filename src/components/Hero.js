import React from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import { IoMdArrowDropdown } from "react-icons/io";
import { Container, Row } from "react-bootstrap";
import { useStateValue } from "../global-state/StateProvider";
import { locationItems } from "../appData";
import { actionTypes } from "../global-state/reducer";

function Hero(props, ref) {
	const [{ location }, dispatch] = useStateValue();

	return (
		<Container fluid>
			<Row>
				<Section className="hero__text-wrap mx-auto flex-col col">
					{/* <div className="mx-auto mb-3">
						<h5 className="notify bg-light p-2 text-center">
							Please note that this site is still undergoing some minor updates.
						</h5>
					</div> */}

					<Fade bottom>
						<div className="hero__top">
							<h4 className="mb-0 top__div-text text-white text-center">
								#1 Food Delivery Service since 2010
							</h4>
						</div>
					</Fade>

					<div className="hero__mid mt-4 mb-5">
						<h2 className="major-text mb-0 text-center text-white">
							We deliver your favorite meal, <br /> fresh & fast in&nbsp;
							<Tippy
								interactive
								trigger="click"
								placement="right"
								arrow={false}
								content={
									<div className="hero__tip-wrap">
										{locationItems.map((location, id) => (
											<h6
												key={id + 1}
												className="mb-0 hero__tip-item p-2"
												onClick={() => {
													dispatch({
														type: actionTypes.SET_LOCATION,
														payload: location,
													});
												}}>
												{location}
											</h6>
										))}
									</div>
								}>
								<span className="hero__dropdown">
									{location}
									<IoMdArrowDropdown />{" "}
								</span>
							</Tippy>
						</h2>
					</div>

					<Fade right>
						<div className="hero__third">
							<button className="hero__btn">
								<Link to="trending" offset={30} className="mb-0 hero__btn-text">
									What would you like to eat?
								</Link>
							</button>
						</div>
					</Fade>
				</Section>
			</Row>
		</Container>
	);
}

export default Hero;

const Section = styled.section`
	min-height: calc(100vh - 75px);
	background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
		url("./images/heroe.jpg") center/cover no-repeat fixed;

	& .major-text {
		font-family: "Rubik", sans-serif;
		font-size: 40px;
		line-height: 55px;
	}

	& .hero__dropdown {
		cursor: pointer;
		color: var(--nav-hvr);
		transition: var(--sht-trans);

		&:hover {
			color: var(--deep-hvr);
		}
	}

	& .tippy-box {
		background: #fff;
		padding: 5px;
	}

	& .hero__tip-item {
		color: var(--mild-gry);
		cursor: pointer;
		transition: var(--sht-trans);

		&:hover {
			color: var(--nav-hvr);
		}
	}

	& .hero__btn {
		outline: none;
		border: none;
		background: var(--nav-hvr);
		padding: 10px 22px;
		border-radius: 5px;

		transition: var(--sht-trans);

		&:hover {
			background: var(--deep-hvr);
		}
	}

	& .hero__btn-text {
		color: #fff;
		text-decoration: none;
		font-family: "Rubik", sans-serif;
		font-size: 14px;
		font-weight: normal;
	}

	.notify {
		color: var(--deep-hvr);
	}
`;
