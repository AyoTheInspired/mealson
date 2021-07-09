import React from "react";
import Navigation from "./Navigation";
import Hero from ".//Hero";
import TrendingFood from "./TrendingFood";
import MobileSection from "./MobileSection";

function Home() {
	return (
		<div>
			<Navigation />
			<Hero />
			<TrendingFood />
			<MobileSection />
		</div>
	);
}

export default Home;
