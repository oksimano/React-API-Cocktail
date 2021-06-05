import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default class BootstrapCards extends Component {
	render() {
		return (
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={this.props.image} alt={this.props.name} />
				<Card.Body>
					<Card.Title>{this.props.name}</Card.Title>
					<Card.Text>{this.props.instruction}</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>{this.props.category}</ListGroupItem>
					<ListGroupItem>{this.props.alcohol}</ListGroupItem>
				</ListGroup>
			</Card>
		);
	}
}
/*
				<h5 className="card-title  p-2">Ingredients:</h5>

				<p className=" p-2">{cocktail.strInstructions}</p>*/
/*<ul class="list-group list-group-flush  p-2"> 
${cocktailIngredients(cocktail)}
</ul>*/
