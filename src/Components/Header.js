import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-primary navbar-dark w-100">
            <Container fluid>
                {/* Duvu Logo as Home Button */}
                <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
                    Duvu
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        {/* Removed Home Link */}
                        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                        <Nav.Link as={Link} to="/tv-shows">TV Shows</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* Right-Side Icons */}
                <div className="d-flex align-items-center">
                    <FaSearch className="text-white cursor-pointer" />
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
