var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		console.log('get initial state');
		return {
			isLoading: true,
			playersInfo: []
		};
	},
	componentWillMount: function () {
		console.log('component will mount');
	},
	componentDidMount: function () {
		console.log('component did mount');
		var query = this.props.location.query;
		console.log('QUERY', query);
		// fetch info from github
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function (players) {
				console.log('PLAYERS', players);
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				});
			}.bind(this));
	},
	componentWillReceiveProps: function () {
		console.log('component received props');
	},
	componentWillUnmount: function () {
		console.log('component will unmount');
	},
	handleInitiateBattle: function () {
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		});
	},
	render: function () {
		return (
			<ConfirmBattle
				isLoading={this.state.isLoading}
				onInitiateBattle={this.handleInitiateBattle}
				playersInfo={this.state.playersInfo}/>
		)
	}
});

module.exports = ConfirmBattleContainer