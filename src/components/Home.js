import React from "react";
import Navigation from "./Navigation";
import Hero from ".//Hero";
import TrendingFood from "./TrendingFood";
import MobileSection from "./MobileSection";
import Partners from "./Partners";
import PopularRestaurants from "./PopularRestaurants";
import UserReviews from "./UserReviews";

function Home() {
	return (
		<div>
			<Navigation />
			<Hero />
			<TrendingFood />
			<MobileSection />
			<Partners />
			<PopularRestaurants />
			<UserReviews />
		</div>
	);
}

export default Home;
