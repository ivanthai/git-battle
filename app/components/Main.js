var React = require('react');
var AppBar = require('material-ui/lib/app-bar');
var Tabs = require('material-ui/lib/tabs');

var Main = React.createClass({
	render: function() {
		return (
			<div className="main-container">
				<AppBar title="holllaaaa" showMenuIconButton={false}/>
					{this.props.children}
			</div>
		)
	}
});

module.exports = Main;