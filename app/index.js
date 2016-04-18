var USER_DATA = {
	name: 'Ivan',
	username: 'kapb6257',
	image: 'https://www.google.com'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function() {
		return <img src={this.props.image} style={{height: 100, width: 90}}/>
	}
});

var Link = React.createClass({
	changeURL: function() {
		window.location.replace(this.props.href)
	},
	render: function() {
		return (
			<span
				style={{color: 'blue', cursor: 'pointer'}}
				onClick={this.changeURL}>
				{this.props.children}
			</span>
		)
	}
});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<div>
				<Link href={'https://github.com/' + this.props.username}>
					{this.props.username}
				</Link> 
			</div>
		)
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.name}
			</div>
		)
	}
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image}/>
				<ProfileName name={this.props.user.name}/>
				<ProfileLink username={this.props.user.username}/>
			</div>
		)
	}
});

var HelloWorld = React.createClass({
	render: function() {
		return (
			<div>Hello {this.props.name}</div>
		)
	}
});

var routes = require('./config/routes');
ReactDOM.render(
	routes,
	document.getElementById('app')
);