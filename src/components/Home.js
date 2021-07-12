import React from "react";
import Navigation from "./Navigation";
import Hero from ".//Hero";
import TrendingFood from "./TrendingFood";
import MobileSection from "./MobileSection";
import Partners from "./Partners";
import RegModal from "./RegModal";

function Home() {
	return (
		<div>
			<Navigation />
			<Hero />
			{/* <RegModal /> */}
			<TrendingFood />
			<MobileSection />
			<Partners />
		</div>
	);
}

export default Home;
