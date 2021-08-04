import { BiDish } from "react-icons/bi";
import { FaTruck, FaHome } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
// import {location} from './global-state/StateProvider'

export const navItems = [
	// {
	// 	itemIcon: <FiMapPin />,
	// 	itemName: "Lagos",
	// 	itemUrl: "#",
	// 	dropdown: true,
	// 	hoverItems: [
	// 		"Los Angeles",
	// 		"Chicago",
	// 		"Houston",
	// 		"Philadelphia",
	// 		"San Diego",
	// 		"Miami",
	// 		"New York",
	// 	],
	// },

	{
		itemIcon: <FaHome />,
		itemName: "Home",
		itemUrl: "/home",
	},

	{
		itemIcon: <BiDish />,
		itemName: "Cuisine",
		itemUrl: "#",
		hoverItems: [
			{
				cuisineSource: "./images/burger.svg",
				cuisineName: "Burgers & Fries",
				category: "Burger",

				// cuisineUrl: "/cuisines",
			},
			{
				cuisineSource: "./images/noodles.svg",
				cuisineName: "Noodles",
				category: "Noodles",
			},
			{
				cuisineSource: "./images/pizza.svg",
				cuisineName: "Pizza & Pasta",
				category: "Pizza",
			},
			{
				cuisineSource: "./images/coffee.svg",
				cuisineName: "Coffee & Desserts",
				category: "Desserts",
			},
			{
				cuisineSource: "./images/steak.svg",
				cuisineName: "Grills & Steaks",
				category: "Steaks",
			},
			{
				cuisineSource: "./images/fish.svg",
				cuisineName: "Fish & Seafood",
				category: "Seafood",
			},
			{
				cuisineSource: "./images/healthy.svg",
				cuisineName: "Fruities",
				category: "Fruities",
			},
		],
	},

	{
		itemIcon: <FaTruck />,
		itemName: "Orders",
		itemUrl: "#",
		dropdown: false,
	},

	{
		itemIcon: <BsQuestionCircle />,
		itemName: "Learn More",
		itemUrl: "#",
	},
];

export const locationItems = [
	"Lagos",
	"Chicago",
	"Houston",
	"Philadelphia",
	"San Diego",
	"Miami",
	"New York",
];

export const menuItems = [
	{
		itemImgSrc: "./images/01.jpg",
		itemTitle: "Burgers & Fries",
		category: "Burger",
	},
	{
		itemImgSrc: "./images/02.jpg",
		itemTitle: "Noodles",
	},
	{
		itemImgSrc: "./images/03.jpg",
		itemTitle: "Sushi & Rolls",
		category: "Burger",
	},
	{
		itemImgSrc: "./images/04.jpg",
		itemTitle: "Pizza & Pasta",
		category: "Burger",
	},
	{
		itemImgSrc: "./images/05.jpg",
		itemTitle: "Coffee & Desserts",
		category: "Burger",
	},
	{
		itemImgSrc: "./images/06.jpg",
		itemTitle: "Fruities",
		category: "Burger",
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

export const customerReviews = [
	{
		cusName: "Ayo Abimbola",
		datePosted: "Dec 13, 2020",
		cusImgSrc: "./images/users/Ayo.jpg",
		reviewText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veniam beatae illo voluptatem est suscipit, consequuntur voluptatibus delectus temporibus quis? ",
		filledStars: 4,
	},
	{
		cusName: "Laura Wilson",
		datePosted: "Feb 05, 2020",
		cusImgSrc: "./images/users/Ashley.jpg",
		reviewText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veniam beatae illo voluptatem est suscipit, consequuntur voluptatibus delectus temporibus quis? ",
		filledStars: 5,
	},
	{
		cusName: "Mary Alice Grant",
		datePosted: "Apr 14, 2020",
		cusImgSrc: "./images/users/Alice.jpg",
		reviewText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veniam beatae illo voluptatem est suscipit, consequuntur voluptatibus delectus temporibus quis? ",
		filledStars: 3,
	},
	{
		cusName: "Adrian Lewis",
		datePosted: "Dec 13, 2020",
		cusImgSrc: "./images/users/Richard.jpg",
		reviewText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veniam beatae illo voluptatem est suscipit, consequuntur voluptatibus delectus temporibus quis? ",
		filledStars: 2,
	},
];

export const footerLeftData = [
	{
		flagSrc: "./images/us.png",
		name: "English",
	},

	{
		flagSrc: "./images/fr.png",
		name: "Francais",
	},

	{
		flagSrc: "./images/de.png",
		name: "Deutsch",
	},

	{
		flagSrc: "./images/it.png",
		name: "Italiano",
	},
];

export const footerMidData = [
	{
		title: "Join Us",
		children: ["Careers", "Restaurants", "Become a Courier", "About"],
	},

	{
		title: "Let us help you",
		children: ["Help Center", "Support", "Contact"],
	},

	{
		title: "Follow Us",
		children: ["Facebook", "Twitter", "Instagram"],
	},
];
