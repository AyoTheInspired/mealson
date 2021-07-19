import React from "react";
import Navigation from "./Navigation";
import Hero from ".//Hero";
import TrendingFood from "./TrendingFood";
import MobileSection from "./MobileSection";
import Partners from "./Partners";
import PopularRestaurants from "./PopularRestaurants";
import UserReviews from "./UserReviews";
import Footer from "./Footer";

function Home() {
	return (
		<>
			<Navigation />
			<Hero />
			<TrendingFood />
			<MobileSection />
			<Partners />
			<PopularRestaurants />
			<UserReviews />
			<Footer />
		</>
	);
}

export default Home;
