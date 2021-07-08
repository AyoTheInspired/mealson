// import { IoLocationOutline } from "react-icons/io";
import { BiDish } from "react-icons/bi";
import { FaHome, FaMapPin, FaTruck } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { BsQuestionCircle } from "react-icons/bs";
import { GrCircleQuestion, GrDeliver, GrLocation } from "react-icons/gr";

export const navItems = [
	{
		itemIcon: <FiMapPin />,
		itemName: "Lagos",
		dropdown: true,
		hoverItems: [
			"Los Angeles",
			"Chicago",
			"Houston",
			"Philadelphia",
			"San Diego",
			"Miami",
			"New York",
		],
	},

	{
		itemIcon: <BiDish />,
		itemName: "Cuisine",
		// dropdown: true,
		hoverItems: [
			{
				cuisineSource: "./images/burger.svg",
				cuisineName: "Burgers & Fries",
			},
			{
				cuisineSource: "./images/noodles.svg",
				cuisineName: "Noodles",
			},
			{
				cuisineSource: "./images/pizza.svg",
				cuisineName: "Pizza & Pasta",
			},
			{
				cuisineSource: "./images/coffee.svg",
				cuisineName: "Coffee & Desserts",
			},
			{
				cuisineSource: "./images/steak.svg",
				cuisineName: "Grills & Steaks",
			},
			{
				cuisineSource: "./images/fish.svg",
				cuisineName: "Fish & Seafood",
			},
			{
				cuisineSource: "./images/healthy.svg",
				cuisineName: "Healthy Food",
			},
		],
	},

	{
		itemIcon: <FaTruck />,
		itemName: "Orders",
		dropdown: false,
	},

	{
		itemIcon: <BsQuestionCircle />,
		itemName: "Learn More",
	},
];

export const menuItems = [
	{
		itemImgSrc: "./images/01.jpg",
		itemTitle: "Burgers & Fries",
	},
	{
		itemImgSrc: "./images/02.jpg",
		itemTitle: "Noodles",
	},
	{
		itemImgSrc: "./images/03.jpg",
		itemTitle: "Sushi & Rolls",
	},
	{
		itemImgSrc: "./images/04.jpg",
		itemTitle: "Pizza & Pasta",
	},
	{
		itemImgSrc: "./images/05.jpg",
		itemTitle: "Coffee & Desserts",
	},
	{
		itemImgSrc: "./images/06.jpg",
		itemTitle: "Fruities",
	},
];
