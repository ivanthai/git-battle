var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var UserDetails = require('../components/UserDetails');
var RaisedButton = require('material-ui/lib/raised-button');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function puke (obj) {
	console.log(obj);
	return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function StartOver () {
	return (
		<div className='col-sm-12' style={styles.space}>
			<Link to='/playerOne'>
				<RaisedButton primary={true} label="Start Over"/>
			</Link>
		</div>
	)
}

function Results (props) {
	if (props.isLoading === true) {
		return (
			<Loading/>
		);
	}

	if (props.scores[0] === props.scores[1]) {
		return (
			<MainContainer>
				<h1>It's a tie!</h1>
				<StartOver />
			</MainContainer>
		);
	}
	var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	var losingIndex = winningIndex === 0 ? 1 : 0;
	return (
		<MainContainer>
			<h1>Results</h1>
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsWrapper header="Winner">
					<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
				</UserDetailsWrapper>
				<UserDetailsWrapper header="Loser">
					<UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
				</UserDetailsWrapper>
			</div>
			<StartOver />
		</MainContainer>
	)
};

Results.propType = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired,
}

module.exports = Results;