var React = require('react');
var AppBar = require('material-ui/lib/app-bar');
var Tabs = require('material-ui/lib/tabs');
require('../main.css');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Main = React.createClass({
	render: function() {
		return (
			<div className="main-container">
				<AppBar title="Voyajoy Lackey"/>
				<ReactCSSTransitionGroup
				transitionName="appear"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}>
					{React.cloneElement(this.props.children, {key: this.props.location.pathname})}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
});

module.exports = Main;