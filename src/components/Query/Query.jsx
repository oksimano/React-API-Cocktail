import { Container, withStyles } from "@material-ui/core";
import MaterialCards from "components/MaterialCards/MaterialCards";
import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";

import Box from "@material-ui/core/Box";

const styles = () => ({
	root: {
		marginTop: 90,
	},
});

class Query extends Component {
	state = {
		search: "",
		list: [],
		selectValue: "",
	};

	handleSearchUpdate = (newValue) => {
		this.setState({
			search: newValue,
		});
	};

	handleSelectValueUpdate = (newSelect) => {
		this.setState({
			selectValue: newSelect,
		});
	};

	cocktailsQuery = (props) => {
		this.setState({
			list: [],
		});

		fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.state.search}`
		)
			.then((response) => response.json())
			.then((cocktails) => {
				for (let cocktail of cocktails.drinks) {
					if (`${this.state.selectValue}` === "") {
						this.getCocktailCardsList(cocktail);
					} else if (cocktail.strAlcoholic === `${this.state.selectValue}`) {
						this.getCocktailCardsList(cocktail);
					}
				}
			})
			.catch(() => {
				console.log("Hibás lekérdezés");
			});
	};

	getCocktailCardsList = (datalist) => {
		if (datalist === undefined) {
			return;
		}
		const newCocktail = {
			name: datalist.strDrink,
			image: datalist.strDrinkThumb,
			instruction: datalist.strInstructions,
			category: datalist.strCategory,
			alcohol: datalist.strAlcoholic,
		};
		const newCocktailList = [...this.state.list, newCocktail];

		this.setState({
			list: newCocktailList,
		});
	};

	render() {
		const { classes } = this.props;
		const cocktailItems = this.state.list.map((cocktail) => (
			<MaterialCards
				name={cocktail.name}
				image={cocktail.image}
				instruction={cocktail.instruction}
				category={cocktail.category}
				alcohol={cocktail.alcohol}
			/>
		));
		return (
			<>
				<Navbar
					handleSearchUpdate={this.handleSearchUpdate}
					inputValue={this.state.search}
					cocktailsQuery={this.cocktailsQuery}
					handleSelectValueUpdate={this.handleSelectValueUpdate}
				/>
				<Container className={classes.root} maxWidth="lg">
					<Box display="flex" flexWrap="wrap" justifyContent="center">
						{cocktailItems}
					</Box>
				</Container>
			</>
		);
	}
}

export default withStyles(styles)(Query);

/*<div className="container d-flex flex-wrap gap-3 pt-3 justify-content-center">
					{cocktailItems}
				</div>*/
