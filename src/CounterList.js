import React, { Component } from "react";
import CounterListItems from "./CounterListItems";
import { Route, NavLink, HashRouter } from "react-router-dom";

class CounterList extends Component {
	
	constructor(props, context) {
		super(props, context);
		this.state = {
			counters: this.props.counters,
		};
		this.deleteCounter = this.deleteCounter.bind(this);
		this.resetCounter = this.resetCounter.bind(this);	
		this.incrementCounter = this.incrementCounter.bind(this);	
	}

	deleteCounter(key) {
		var filteredItems = this.state.counters.filter(function (counter) {
			return (counter.key !== key);
		});
		
		this.setState({
			counters: filteredItems
		});
		
		var handler  = this.props.handler;
		handler(filteredItems);
	}

	resetCounter(key) {
		let counters = this.state.counters;
	
		counters.forEach(function(item, i) { 
			if (item.key === key) {
				counters[i].counter = 0;
			}
		});

		this.setState({
			counters: counters
		});

		var handler  = this.props.handler;
		handler(this.state.counters);
	}

	incrementCounter(key) {
		let counters = this.state.counters;
		counters.forEach(function(item, i) { 
			if (item.key === key) {
				counters[i].counter += 1;
			}
		});
		var handler  = this.props.handler;
		handler(this.state.counters);
	}

	componentDidMount() {
		window.updateSwipeListeners();
	}

	render() {
		return (
			<div>
				<CounterListItems counters={this.props.counters}
								  delete={this.deleteCounter}
								  reset={this.resetCounter}
								  increment={this.incrementCounter} />
				<div className="footer">
					<NavLink to="/new-counter">Add new counter type</NavLink>
				</div>
			</div>
		);
	}
}
export default CounterList;