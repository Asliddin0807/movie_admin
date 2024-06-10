import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  let token = localStorage.getItem("token");
  useEffect(() => {
    const tokens = () => {
      let app = localStorage.getItem('token')
      return app 
    }

    tokens()

  }, []);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">MovieApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {token && (
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/add">Add Movie</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/author">Authors</Nav.Link>
                <Nav.Link
                  href="/"
                  onClick={() => localStorage.removeItem("token")}
                >
                  Log out
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
