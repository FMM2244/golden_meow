import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function AppNavbar({ role }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Gold POS</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {role === 'employee' && (
              <>
                <LinkContainer to="/employee/inventory">
                  <Nav.Link>Inventory</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/employee/sales">
                  <Nav.Link>Sales</Nav.Link>
                </LinkContainer>
              </>
            )}
            {role === 'owner' && (
              <>
                <LinkContainer to="/owner/reports">
                  <Nav.Link>Reports</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/owner/users">
                  <Nav.Link>Users</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
