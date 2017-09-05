/** React Imports */
import * as React from 'react';
import { NavLink } from 'react-router-dom';

/** Bootstrap Imports */
import { Navbar, NavbarToggler, NavbarBrand, Nav, 
	NavItem, Collapse, InputGroup, Input, InputGroupAddon } from 'reactstrap';

/** Stylesheet Imports */
import './dashboard.css';

interface Props {
	children?: React.ReactNode;
}

interface State {
	isOpen: boolean;
}

class Dashboard extends React.Component<Props> {
	state: State;

	constructor(public props: Props) {
		super(props);
		
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			isOpen: false
		};
	}
	
	toggleNavbar() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="dark" className="navbar-dark navbar-expand-sm" toggleable fixed="top">
					<NavbarToggler right onClick={this.toggleNavbar}/>
					<NavbarBrand href="/">vc-react</NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink exact className="nav-link" to="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/nothome">Not Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/page">Page</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
					<InputGroup>
						<Input placeholder="username" />
						<InputGroupAddon>@example.com</InputGroupAddon>
					</InputGroup>
				</Navbar>
				<div className="content">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Dashboard;