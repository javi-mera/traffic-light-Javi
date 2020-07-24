import React from "react";

export default class Trafficlights extends React.Component {
	constructor() {
		super();
		this.state = {
			newLight: null
		};
	}

	render() {
		console.log(this.state);
		let redNewLight = "";
		if (this.state.newLight == "red") redNewLight = "selected";
		let yellowNewLight = "";
		if (this.state.newLight == "yellow") yellowNewLight = "selected";
		let greenNewLight = "";
		if (this.state.newLight == "green") greenNewLight = "selected";

		return (
			<div>
				<div id="trafficTop" />
				<div id="container">
					<div
						className={"red light " + redNewLight}
						onClick={() => this.setState({ newLight: "red" })}
					/>
					<div
						className={"yellow light " + yellowNewLight}
						onClick={() => this.setState({ newLight: "yellow" })}
					/>
					<div
						className={"green light " + greenNewLight}
						onClick={() => this.setState({ newLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
