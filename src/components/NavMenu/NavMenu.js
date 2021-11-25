import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';

const NavMenu = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const navigate = useNavigate();

	const handleShowSectionMenu = (id) => {
		if (id !== '0') {
			navigate(`/section/${id}`);
			setIsExpanded(false);
		} else {
			navigate('/');
			setIsExpanded(false);
		}
	};

	return (
		<Navbar bg='light' expand={false} expanded={isExpanded}>
			<Container fluid>
				<Navbar.Toggle
					onClick={() => setIsExpanded(true)}
					aria-controls='offcanvasNavbar'
				/>
				<Navbar.Offcanvas
					id='offcanvasNavbar'
					aria-labelledby='offcanvasNavbarLabel'
					placement='start'
				>
					<Offcanvas.Body>
						<Nav className='justify-content-end flex-grow-1 pe-3'>
							<Nav.Link
								onClick={() => handleShowSectionMenu('0')}
							>
								Main Map
							</Nav.Link>
							<Nav.Link
								onClick={() => handleShowSectionMenu('1')}
							>
								Section 1
							</Nav.Link>
							<Nav.Link
								onClick={() => handleShowSectionMenu('2')}
							>
								Section 2
							</Nav.Link>
							<Nav.Link
								onClick={() => handleShowSectionMenu('3')}
							>
								Section 3
							</Nav.Link>
							<Nav.Link
								onClick={() => handleShowSectionMenu('4')}
							>
								Section 4
							</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
				<Navbar.Brand>History Map</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default NavMenu;
