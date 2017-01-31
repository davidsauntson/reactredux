import React  from "react";
import {Link} from "react-router";

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Pluralsight Admin</h1>
				<p>React, Reduc and React Router in ES6 for ultraprespnsive web apps.</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
}

export default HomePage;