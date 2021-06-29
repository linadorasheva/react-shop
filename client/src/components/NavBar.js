import React, { useContext } from 'react';
import {
  Button, Container, Nav, Navbar,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { SHOP_ROUTE_PATH } from '../utils/constants';
import Context from '../store/Context';

const NavBar = observer(() => {
  const { userStore } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE_PATH}>Online Store</NavLink>
        { userStore.getIsAuth
          ? (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant="outline-light" className="mr-2">Админ панель</Button>
              <Button variant="outline-light" onClick={() => userStore.setAuthValue(false)}>Выйти</Button>
            </Nav>
          )
          : (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant="info" onClick={() => userStore.setAuthValue(true)}>Авторизация</Button>
            </Nav>
          )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
