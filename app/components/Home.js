var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var FlatButton = require('material-ui/lib/raised-button');


var Home = React.createClass({
	render: function() {
		return (
			<div className='jumbotron col-sm-12 text-center' style={transparentBg}>
				<h1>Hello World From Home!!!!</h1>
				<p className="lead">Some fancy motto</p>
				<Link to='/playerOne'>
					<FlatButton primary={true} label='Get Started'/>
				</Link>
			</div>
		)
	}
});

module.exports = Home;