import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import SearchBox from './SearchBox'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>

          <LinkContainer to='/'>
            <Navbar.Brand>IMDB</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />

            <Nav className='ml-auto'>

              <LinkContainer to='/favorites'>
                <Nav.Link>
                  <i className='fas fa-heart'></i> Favorites
                </Nav.Link>
              </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  )
}

export default Header
