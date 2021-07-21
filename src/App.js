import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Cuisines from "./components/Cuisines";
import RegModal from "./components/RegModal";
import Navigation from "./components/Navigation";
import ScrollIcon from "./components/ScrollIcon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<ScrollIcon />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/cuisines/:cuisineName" component={Cuisines} />
					<Route exact path="/register" component={RegModal} />
				</Switch>
				{/* <Home /> */}
			</div>
		</Router>
	);
}

export default App;
