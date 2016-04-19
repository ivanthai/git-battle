var React = require('react');
var PropTypes = React.PropTypes
var styles = require('../styles');
var FlatButton = require('material-ui/lib/raised-button');
var Link = require('react-router').Link;
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
function puke (object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
			<h1>Confirm Players</h1>
			<div classname='col-sm-8 col-sm-offset-2'>
				<UserDetailsWrapper header='Player One'>
					<UserDetails info={props.playersInfo[0]}/>
				</UserDetailsWrapper>
				<UserDetailsWrapper header='Player Two'>
					<UserDetails info={props.playersInfo[1]}/>
				</UserDetailsWrapper>
			</div>
			<div className='col-sm-8 col-sm-offset-2'>
				<div className='col-sm-12' style={styles.space}>
					<FlatButton
						primary={true}
						onClick={props.onInitiateBattle}
						label="Initiate Battle"/>
				</div>
				<div className='col-sm-12' style={styles.space}>
					<Link to="/playerOne">
						<FlatButton
							secondary={true}
							label="Reselect Players"
							onClick={props.onInitiateBattle} label="Reselect Players"/>
					</Link>
				</div>
			</div>
		</div>
};

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;