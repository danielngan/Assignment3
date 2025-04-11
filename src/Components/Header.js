import { Navbar, Nav, Container, Button } from "react-bootstrap";
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
                        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                        <Nav.Link as={Link} to="/tv-shows">TV Shows</Nav.Link>
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                    </Nav>

                    {/* Right Side - Search Icon, Login & Sign Up Buttons */}
                    <div className="d-flex align-items-center ms-auto gap-3">
                        <FaSearch className="text-white cursor-pointer" />
                        <Link to="/login">
                            <Button variant="outline-light" size="sm">Login</Button>
                        </Link>

                        <Link to="/signup">
                            <Button variant="light" size="sm">Sign Up</Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
