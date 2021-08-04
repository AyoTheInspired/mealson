import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import RegModal from "./components/RegModal";
import Navigation from "./components/Navigation";
import ScrollIcon from "./components/ScrollIcon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cuisines from "./components/Cuisines";

function App() {
	return (
		<Router>
			<div className="App">
				<ScrollIcon />
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/cuisines/:cuisineName" component={Cuisines} />
					<Route exact path="/register" component={RegModal} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
