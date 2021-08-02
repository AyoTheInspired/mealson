import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import styled from "styled-components";

function ScrollIcon() {
	const [showScroll, setShowScroll] = useState(false);

	function scrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	const listener = function () {
		if (window.scrollY >= 300) {
			setShowScroll(true);
		} else {
			setShowScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listener);

		return () => {
			window.removeEventListener("scroll", listener);
		};
	}, [showScroll]);

	return (
		<Wrap className={showScroll ? "active" : null}>
			<div onClick={scrollTop} className="icon__wrapper flexed">
				<FaChevronUp className="scroll__icon" />
			</div>
		</Wrap>
	);
}

export default ScrollIcon;

const Wrap = styled.div`
	position: fixed;
	bottom: 800px;
	right: 10px;
	z-index: 200;
	opacity: 0;
	transition: all 0.5s linear;

	&.active {
		bottom: 30px !important;
		opacity: 1;
	}

	.icon__wrapper {
		box-shadow: 0px 1px 5px #000;
		padding: 10px;
		background: var(--deep-hvr);
		border-radius: 50%;
		cursor: pointer;
	}

	.scroll__icon {
		font-size: 20px;
		color: var(--nav-hvr);
		color: #fff;
		animation: scrollAnim 0.5s alternate ease infinite;
	}

	@keyframes scrollAnim {
		from {
			transform: translateY(2px);
		}
		to {
			transform: translateY(-1px);
		}
	}

	@media (max-width: 450px) {
		right: 22px;

		.icon__wrapper {
			padding: 10px;
		}

		.scroll__icon {
			font-size: 18px;
		}
	}
`;
