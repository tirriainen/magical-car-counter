import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import CounterList from "./CounterList";
import NewCounter from "./NewCounter";

class App extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			counters: [{
				name: 'Sport',
				icon: 'icon-1',
				key: 1,
				counter: 4
			}, {
				name: 'Sedan',
				icon: 'icon-2',
				key: 2,
				counter: 8
			}],
		};
		this.handler = this.handler.bind(this);
	}

	handler(counters) {
		this.setState({
			counters: counters
		});
	}

render() {
	var handler = this.handler;
	return (
		<HashRouter>
		<div className="container is-fluid">
			<div className="header">
				<h1>The Magical Car Counter</h1>
			</div>
			<div className="content">
				<Route exact path="/" render={()=><CounterList counters={this.state.counters} handler={handler} />}/>
				<Route path="/new-counter" render={()=><NewCounter counters={this.state.counters} />}/>
			</div>
		</div>
		</HashRouter>
    );
  }
}

export default App;