import React from 'react';
import {
  Button,
  Card,
  Container,
  Form,
} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE_PATH, REGISTRATION_ROUTE_PATH } from '../utils/constants';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE_PATH;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100%', flexGrow: '1' }}>
      <Card style={{ width: '600px' }} className="p-5">
        <h2 className="mb-5 text-center">{ isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column align-items-center">
          <div style={{ marginBottom: '20px', width: '100%' }}>
            <Form.Control className="mb-2" placeholder="Введите Ваш email" />
            <Form.Control placeholder="Введите Ваш пароль" />
          </div>

          <div className="d-flex justify-content-between align-items-baseline" style={{ width: '100%' }}>
            { isLogin
              ? (
                <div>
                  <span>Нет аккаунта?</span>
                  <NavLink className="d-inline-block ml-2" to={REGISTRATION_ROUTE_PATH}>Зарегистрироваться</NavLink>
                </div>
              )
              : (
                <div>
                  <span>Есть аккаунт?</span>
                  <NavLink className="d-inline-block ml-2" to={LOGIN_ROUTE_PATH}>Войти</NavLink>
                </div>
              )}
            <Button variant="info" style={{ width: '30%' }}>
              { isLogin ? 'Войти' : 'Регистрация' }
            </Button>
          </div>

        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
