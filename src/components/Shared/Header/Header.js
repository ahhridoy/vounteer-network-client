import React from "react";
import {
    Container,
    FormControl,
    Image,
    InputGroup,
    Nav,
    Navbar,
    Button
} from "react-bootstrap";
import img from "../../../images/logo.png";

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={img} className="w-25"></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Donation</Nav.Link>
                        <Nav.Link href="#pricing">Events</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <div>
                    <h2 className="my-5">I GROW BY HELPING PEOPLE IN NEED</h2>
                    <InputGroup className="mb-3 w-25 mx-auto">
                        <FormControl placeholder="Search..." />
                        <Button variant="outline-primary" id="button-addon2">
                            Button
                        </Button>
                    </InputGroup>
                </div>
            </Container>
        </div>
    );
};

export default Header;
