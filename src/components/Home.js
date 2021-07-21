import React from "react";
import Hero from ".//Hero";
import TrendingFood from "./TrendingFood";
import MobileSection from "./MobileSection";
import Partners from "./Partners";
import PopularRestaurants from "./PopularRestaurants";
import UserReviews from "./UserReviews";
import Footer from "./Footer";
import ScrollIcon from "./ScrollIcon";

function Home() {
	return (
		<>
			<Hero />
			<TrendingFood />
			<MobileSection />
			<Partners />
			<PopularRestaurants />
			<UserReviews />
			<Footer />
			<ScrollIcon />
		</>
	);
}

export default Home;
