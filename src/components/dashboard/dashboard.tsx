/** React Imports */
import * as React from 'react';
import { NavLink } from 'react-router-dom';

/** Bootstrap Imports */
import { Navbar, NavbarToggler, NavbarBrand, Nav, 
	NavItem, Collapse } from 'reactstrap';

/** Stylesheet Imports */
import './dashboard.css';

/** Component Imports */
import Search from '../search/search';

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
					<NavbarBrand className="d-none d-sm-block" href="/">vc-react</NavbarBrand>
					<Search className="order-1 order-sm-12" />
					<Collapse className="order-sm-2 order-12" isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
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
				</Navbar>
				<div className="content">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Dashboard;