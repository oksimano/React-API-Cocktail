import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	withStyles,
} from "@material-ui/core";
import React, { Component } from "react";

const Styles = () => ({
	root: {
		width: 288,
		marginBottom: 20,
		marginLeft: 20,
	},
	media: {
		height: 300,
	},
});

export class MaterialCards extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Card className={classes.root} elevation={3}>
				<CardMedia
					className={classes.media}
					image={this.props.image}
					title={this.props.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{this.props.name}
					</Typography>
					<Typography gutterBottom variant="body1" component="p">
						{this.props.category}
					</Typography>
					<Typography gutterBottom variant="body1" component="p">
						{this.props.alcohol}
					</Typography>

					<Typography variant="body2" color="textSecondary" component="p">
						{this.props.instruction}
					</Typography>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(Styles, { withTheme: true })(MaterialCards);
