import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSideNav = styled.div`
position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 200px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 5px;

  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
`;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }
    onItemClick = (path) => {
      this.setState({ active: path });
    }  
  
  render() {
    // const { items, activePath } = this.state;
    return (
        <StyledSideNav>
          export const NavigationBar = () => (
  
          <Nav.Item><Nav.Link href="http://localhost:3000/">Dashboard</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="http://localhost:3000/customers">Customers</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="http://localhost:3000/CreateReceiveOnlyUser">Create Recive Only User</Nav.Link></Nav.Item>
        
      

  
)
        </StyledSideNav>

    );
  }
}
const StyledNavItem = styled.div`
position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */

  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;


class NavItem extends React.Component {
  handleClick = () => {
      const { path, onItemClick }= this.props;
      onItemClick(path);
  }
  render() {
    const { active } = this.props;
    return(
        <StyledNavItem active={active}>
          <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                <navIcon></navIcon>
          </Link>
        </StyledNavItem>
    );
  }
}


const NavIcon = styled.div``;

export default class Sidebar extends React.Component {
    render() {
        return (
            <SideNav></SideNav>
        )
    }
}