import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsDiagram3 } from 'react-icons/bs'; 

export default function Header() {
    return (
        
        <Navbar bg="dark" data-bs-theme="dark" className="shadow-sm py-2">
            <Container>
                {/* As classes d-flex, align-items-center e gap-2 alinham o ícone e o texto perfeitamente */}
                <Navbar.Brand href="#home" className="d-flex align-items-center gap-2 fw-bold text-white fs-4">
                    <BsDiagram3 className="text-primary" size={26} />
                    <span>KAFKA Core</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}