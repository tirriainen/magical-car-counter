import React, { Component } from "react";

class CounterListItems extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			counters: this.props.counters
		};
		
		this.createCounters = this.createCounters.bind(this);
	}
 
	delete(key) {
		this.props.delete(key);
	}
	
	reset(key) {
		this.props.reset(key);
	}

	increment(key) {
		this.props.increment(key);
	}

	createCounters(item) {
		var icons = [];
		for (let i = 1; i <= item.counter; i++) {
			icons.push(<img className="icon" key={i} src={'icons/' + item.icon + '.png'} alt="icon" />);
		}

		return (
		<div className="counter-item" key={item.key} id={'icons-key-' + item.key}>
			<div className="col meta">
				<h2>{item.name}</h2>
				<h3>{item.counter}</h3>
			</div>
			<div className="col icons">
				{ icons }
			</div>
			<div className="col buttons">
				<button className="button is-link" onClick={() => this.increment(item.key)}>+1</button>
				<div className="swipe-buttons">
					<button className="button is-link" onClick={() => this.delete(item.key)}>Delete</button>
					<button className="button is-link" onClick={() => this.reset(item.key)}>Reset</button>
				</div>
			</div>
		</div>
		)
	}
 
	render() {
		var counterEntries = this.props.counters;
		var listItems = counterEntries.map(this.createCounters);

		return <div>{listItems}</div>
	}
};

export default CounterListItems;