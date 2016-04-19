var React = require('react');
var CircularProgress = require('material-ui/lib/circular-progress');

var Loading = React.createClass({
	getDefaultProps: function () {
		return {
			size: 10
		};
	},
	render: function () {
		return (
			<div className="text-center">
				<CircularProgress size={this.props.size}/>
			</div>
		)
	}
});

module.exports = Loading;