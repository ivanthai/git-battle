var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var FlatButton = require('material-ui/lib/raised-button');
var MainContainer = require('./MainContainer');


var Home = React.createClass({
	render: function() {
		return (
			<MainContainer>
				<h1>Hello World From Home!!!!</h1>
				<p className="lead">Some fancy motto</p>
				<Link to='/playerOne'>
					<FlatButton primary={true} label='Get Started'/>
				</Link>
			</MainContainer>
		)
	}
});

module.exports = Home;