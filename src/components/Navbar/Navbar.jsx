// @ts-nocheck
import React, { Component } from "react";
import clsx from "clsx";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	TextField,
	Container,
	Hidden,
	IconButton,
	Drawer,
} from "@material-ui/core";
import { purple, teal } from "@material-ui/core/colors";
import {
	createMuiTheme,
	ThemeProvider,
	withStyles,
} from "@material-ui/core/styles";
import { ChevronLeft } from "@material-ui/icons/";
import { ChevronRight } from "@material-ui/icons/";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.scss";

const selections = [
	{
		value: "",
		label: "",
	},
	{
		value: "Alcoholic",
		label: "Alcoholic",
	},
	{
		value: "Non alcoholic",
		label: "Non alcoholic",
	},
];

const drawerWidth = 240;

const styles = (theme) => ({
	root: {
		display: "flex",
	},
	button: {
		margin: theme.spacing(1),
	},

	toolbar: {
		justifyContent: "space-between",
	},
	textField: {
		margin: theme.spacing(1),
		marginRight: theme.spacing(2),
	},
	form: {
		alignItems: "center",
		display: "flex",
		[theme.breakpoints.down("xs")]: {
			display: "block",
		},
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	},
	title: {
		flexGrow: 1,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-start",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginRight: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: 0,
	},
});

const colorTheme = createMuiTheme({
	palette: {
		primary: {
			main: teal[500],
			contrastText: "#fff",
		},
	},
});

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(purple[500]),
		backgroundColor: purple[500],
		"&:hover": {
			backgroundColor: purple[700],
		},
	},
}))(Button);

const ColorTextField = withStyles((theme) => ({
	root: {
		"& .MuiFormLabel-root": {
			color: theme.palette.common.white,
			[theme.breakpoints.down("xs")]: {
				color: theme.palette.common.black,
			},
		},
		"& .MuiInputBase-root": {
			color: theme.palette.common.white,
			[theme.breakpoints.down("xs")]: {
				color: theme.palette.common.black,
			},
		},
	},
}))(TextField);

class Navbar extends Component {
	state = {
		open: false,
	};

	handleChange = (e) => {
		this.props.handleSearchUpdate(e.target.value);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.cocktailsQuery(this.props.inputValue);
	};
	handleSelectValue = (e) => {
		this.props.handleSelectValueUpdate(e.target.value);
	};

	render() {
		const { classes, theme } = this.props;
		const handleDrawerOpen = () => {
			this.setState({
				open: true,
			});
		};

		const handleDrawerClose = () => {
			this.setState({
				open: false,
			});
		};
		return (
			<>
				<ThemeProvider theme={colorTheme}>
					<AppBar
						className={clsx(classes.appBar, {
							[classes.appBarShift]: this.state.open,
						})}>
						<Container maxWidth="lg">
							<Toolbar className={classes.toolbar}>
								<Typography variant="h5">Cocktails</Typography>
								<Hidden xsDown>
									<form className={classes.form} onSubmit={this.handleSubmit}>
										<ColorTextField
											className={classes.textField}
											label="First letter"
											onChange={this.handleChange}></ColorTextField>
										<ColorTextField
											className={classes.textField}
											select
											label="Type of"
											value={this.selection}
											onChange={this.handleSelectValue}
											SelectProps={{
												native: true,
											}}>
											{selections.map((option) => (
												<option key={option.value} value={option.value}>
													{option.label}
												</option>
											))}
										</ColorTextField>
										<ColorButton
											className={classes.button}
											variant="outlined"
											type="submit"
											disableElevation>
											Search
										</ColorButton>
									</form>
								</Hidden>
								<Hidden smUp>
									<IconButton
										color="inherit"
										aria-label="open drawer"
										edge="end"
										onClick={handleDrawerOpen}
										className={clsx(this.state.open && classes.hide)}>
										<MenuIcon />
									</IconButton>
								</Hidden>
							</Toolbar>
						</Container>
					</AppBar>
				</ThemeProvider>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="right"
					open={this.state.open}
					classes={{
						paper: classes.drawerPaper,
					}}>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
						</IconButton>
					</div>
					<form className={classes.form} onSubmit={this.handleSubmit}>
						<ColorTextField
							className={classes.textField}
							label="First letter"
							onChange={this.handleChange}>
							{"down(sm): black"}
						</ColorTextField>
						<ColorTextField
							className={classes.textField}
							select
							label="Type of"
							value={this.selection}
							onChange={this.handleSelectValue}
							SelectProps={{
								native: true,
							}}>
							{selections.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
							{"down(sm): black"}
						</ColorTextField>
						<ColorButton
							className={classes.button}
							variant="outlined"
							type="submit"
							disableElevation>
							Search
						</ColorButton>
					</form>
				</Drawer>
			</>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Navbar);
