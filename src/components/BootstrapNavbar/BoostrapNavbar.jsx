import React from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";

import "./MainNavbar.scss";

class BootstrapNavbar extends React.Component {
	handleChange = (e) => {
		this.props.handleSearchUpdate(e.target.value);
	};
	handleSubmit = (e) => {
		e.preventDefault();

		this.props.coctailsQuery(this.props.inputValue);
	};
	handleSelectValue = (e) => {
		this.props.handleSelectValueUpdate(e.target.value);
	};

	render() {
		return (
			<>
				<Navbar
					expand="md"
					bg="primary"
					variant="dark"
					className="justify-content-between p-2">
					<Container>
						<Navbar.Brand href="#home">Cocktails</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse
							id="responsive-navbar-nav"
							className="justify-content-md-end">
							<Form
								inline
								className="d-md-flex align-items-center"
								action="#"
								method="GET"
								name="input-key"
								onSubmit={this.handleSubmit}>
								<FloatingLabel
									type="text"
									label="First letter (a-z, 1-9): "
									id="myLabel"
									className="mr-sm-2"
									onChange={this.handleChange}
								/>
								<Form.Label
									className="my-1 mr-2 text-white"
									htmlFor="inlineFormCustomSelectPref">
									Type of
								</Form.Label>
								<Form.Control
									as="select"
									className="m-3 mr-sm-2 p-2 rounded"
									id="inlineFormCustomSelectPref"
									custom
									value={this.props.selectValue}
									onChange={this.handleSelectValue}>
									<option value="Alcoholic">Alcoholic</option>
									<option value="Non alcoholic">Non-alcoholic</option>
								</Form.Control>

								<Button type="submit" variant="outline-light" className="ms-2">
									Search
								</Button>
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		);
	}
}

export default BootstrapNavbar;
