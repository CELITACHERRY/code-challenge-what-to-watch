import React from 'react'
import { Navbar,Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Header() {
    return (
    
       <div> 
       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">What to watch</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    > 
      <NavDropdown title="type" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Movie</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Series</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Episode</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Title"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>


      

    );
}
