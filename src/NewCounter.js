import React, { Component } from "react";
import { Redirect } from 'react-router'

class NewCounter extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			counters: this.props.counters,
			redirect: false
		};
		this.addCounter = this.addCounter.bind(this);
	}

	addCounter(e) {
		e.preventDefault();

		var counterArray = this.props.counters;
		var icon = document.querySelector('input[name="icon"]:checked').value;

		if (this.name.value !== "" && icon !== "") {
			counterArray.unshift({
				name: this.name.value,
				icon: icon,
				counter: 0,
				key: Date.now()
			});

			this.setState({
				counters: counterArray
			});

			this.name.value = "";
		}

		this.setState({redirect: true});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect push to="/" />;
		}
		var icons = ['icon-1', 'icon-2', 'icon-3', 'icon-4'];
		var iconsList = icons.map(function(icon, index) {
			return (
				<span key={index}>
					<label><img src={'icons/' + icon + '.png'} alt="icon" />
					&nbsp;
					<input type="radio" name="icon" value={icon} />
					</label>
					<br/>
				</span>
			)
		});
		return (
			<div className="section">
			<div className="columns">
				<div className="column">
				<form onSubmit={this.addCounter}>
				<div className="field">
					<label className="label">Name</label>
					<div className="control">
					<input className="input" placeholder="e.g. Sedan" 
						ref={input => this.name = input} />
					</div>
				</div>
				<div className="field">
					<label className="label">Choose icon</label>
					<div className="control">
					{ iconsList }
					</div>
				</div>
				<button className="button is-link" type="submit">OK</button>
				</form>
				</div>
			</div>
			</div>
		);
	}
}

export default NewCounter;