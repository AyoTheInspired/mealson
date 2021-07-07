import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { navItems } from "./appData";

function Jes() {
	return (
		<div>
			<Nav className="bg-dark">
				{/* <div className="nav__left flexed bg-warning"> */}
				{navItems.map((item, id) => {
					const { itemIcon, itemName, hoverItems } = item;
					return (
						<div className="nav__item-wrap flexed" key={id}>
							<div className="nav__icon mb-1"> {itemIcon} </div>
							<Nav.Link className="nav__link"> {itemName} </Nav.Link>
						</div>
					);
				})}
				{/* </div> */}

				<div className="nav__right bg-danger ml-auto">
					<div className="nav__right-item text-white">
						<AiOutlineSearch />
					</div>
					<div className="nav__right-item text-white">
						<AiOutlineUser />
					</div>
				</div>
			</Nav>
		</div>
	);
}

export default Jes;
