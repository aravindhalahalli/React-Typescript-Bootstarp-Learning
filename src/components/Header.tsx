import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
      <Navbar fixed="top" bg="dark" variant="dark">
          <Container>
              <Navbar.Brand>
                  Simple Note Taking Application
              </Navbar.Brand>
          </Container>
      </Navbar>
  );
};

export default Header;
