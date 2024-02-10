'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Link from 'next/link';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';

import NavDropdown from 'react-bootstrap/NavDropdown';

import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react'

function Menu({children }) {
  
  const { data: session } = useSession()

  const title=<DynamicFeedIcon/>

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My-Site</Navbar.Brand>
          <Nav className="me-auto">

          <NavDropdown title={title} >
           {children } 
         </NavDropdown>
            
            <Nav.Link as={Link} href="/"><HomeIcon/>Home</Nav.Link>
 
             {session? <Nav.Link onClick={() => signOut()}><LogoutIcon/>Se déconnecter</Nav.Link>
            : <Nav.Link onClick={() => signIn()}><AccountCircleIcon/>Se connecter</Nav.Link>
            }

            <Nav.Link as={Link} href="/client/pageAide"><HelpIcon />Aide</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </>
  );
}

export default Menu;