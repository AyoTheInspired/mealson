import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Cuisines from "./components/Cuisines";
import RegModal from "./components/RegModal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
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
