import { Navbar, Nav, Container } from "react-bootstrap"

export default function Menu(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container >
                <Nav.Link href="#home" className="fas fa-meteor me-auto" style={{fontSize:"2.5rem", color: "#fff", textDecoration: "none"}}>AstrOOnauta</Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="md-auto"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto text-center"></Nav>
                    <Nav className="text-center">
                    <Nav.Link href="#" className="fas fa-user" style={{fontSize:"2.5rem"}}></Nav.Link>
                    </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}