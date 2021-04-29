import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/AKS.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      
    </Navbar.Brand>
  
  <Navbar.Brand href="#home">AKS (All Kinds of Stuff)</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#features">test</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Roadmap</Nav.Link>
      <Nav.Link href="#pricing">Whitepaper</Nav.Link>
    
      <NavDropdown title="Contact" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://t.me/AllKindsofStuff">Telegram</NavDropdown.Item>
        <NavDropdown.Item href="https://www.instagram.com/getaks.io/">Instagram</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
        <NavDropdown.Item href="#">Reddit</NavDropdown.Item>
        <NavDropdown.Item href="https://discord.gg/ahjCBUQAyT">Discord</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">LINK-1</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        LINK-2
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default App;
