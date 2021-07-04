import React, { useContext } from 'react';
import {
  Button, Container, Nav, Navbar,
} from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE_PATH, LOGIN_ROUTE_PATH, SHOP_ROUTE_PATH } from '../utils/constants';
import Context from '../store/Context';

const NavBar = observer(() => {
  const history = useHistory();

  const { userStore } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark" style={{ 'padding': '20px 0' }}>
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE_PATH}>Online Store</NavLink>
        { userStore.getIsAuth
          ? (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant="outline-light" className="mr-2" onClick={() => history.push(ADMIN_ROUTE_PATH)}>Админ панель</Button>
              <Button variant="outline-light" onClick={() => history.push(LOGIN_ROUTE_PATH)}>Выйти</Button>
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
