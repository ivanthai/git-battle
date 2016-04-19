var React = require('react');
var transparentBg = require('../styles').transparentBg;
var FlatButton = require('material-ui/lib/raised-button');
var TextField = require('material-ui/lib/text-field');
var PropTypes = React.PropTypes;

// functional stateless components
function Prompt(props) {
	return (
		<div style={transparentBg} className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
			<h1>{props.header}</h1>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitUser}>
					<div className="form-group">
						<TextField
							type="text"
								floatingLabelText="Github Username"
								onChange={props.onUpdateUser}
								value={props.username}/>
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">
						<FlatButton
							primary={true}
							label="Continue"
							fullWidth={false}
							type="submit"/>
					</div>
				</form>

			</div>

		</div>
	)
};

Prompt.propTypes =  {
	header: PropTypes.string.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
}

module.exports = Prompt;