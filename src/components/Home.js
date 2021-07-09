import React from "react";
import Navigation from "./Navigation";
import Hero from ".//Hero";
import TrendingFood from "./TrendingFood";
import MobileSection from "./MobileSection";
import Partners from "./Partners";

function Home() {
	return (
		<div>
			<Navigation />
			<Hero />
			<TrendingFood />
			<MobileSection />
			<Partners />
		</div>
	);
}

export default Home;
