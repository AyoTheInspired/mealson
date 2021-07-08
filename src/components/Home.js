import React from "react";
import Navigation from "./Navigation";
import Hero from ".//Hero";
import TrendingFood from "./TrendingFood";

function Home() {
	return (
		<div>
			<Navigation />
			<Hero />
			<TrendingFood />
		</div>
	);
}

export default Home;
