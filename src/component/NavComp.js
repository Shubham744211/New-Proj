import React,{useState} from 'react'
 import 'bootstrap/dist/css/bootstrap.css'; 
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import { BrowserRouter as  Router , Link} from 'react-router-dom';
function NavComp() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/" className="text-light">LOGIN PAGE</NavbarBrand>
                <NavbarToggler onClick={toggle} className="text-light" />
                <Collapse isOpen={isOpen} navbar className="float-right text-center">
                {/* <NavbarText>Simple Text</NavbarText> */}
                <Router>
                <Nav className=" ml-auto" navbar style={{marginRight:'40px',color:'white'}} >
                    <NavItem>
                        <NavLink href="/home" exact style={{color:'white'}}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" style={{color:'white'}}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" style={{color:'white'}}>Service</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" style={{color:'white'}}>Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret style={{color:'white'}}>
                            More
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </NavItem>
                </Nav></Router></Collapse>
            </Navbar>
        </div>
    )
}

export default NavComp
