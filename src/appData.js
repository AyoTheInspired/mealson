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
