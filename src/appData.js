import { BiDish } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

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

export const restaurants = [
	{
		resLogo: "./images/01.png",
	},
	{
		resLogo: "./images/02.png",
	},
	{
		resLogo: "./images/03.png",
	},
	{
		resLogo: "./images/04.png",
	},
	{
		resLogo: "./images/05.png",
	},
	{
		resLogo: "./images/06.png",
	},
	{
		resLogo: "./images/07.png",
	},
	{
		resLogo: "./images/08.png",
	},
	{
		resLogo: "./images/09.png",
	},
	{
		resLogo: "./images/10.png",
	},
	{
		resLogo: "./images/11.png",
	},
	{
		resLogo: "./images/12.png",
	},
];
