import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE_PATH } from '../utils/constants';

const AppRouter = () => {
  const isAuth = false;

  return (
    <Switch>
      {isAuth && authRoutes.map(({path, Component}) =>
        <Route key={`key-${path}`} path={path} component={Component} exact/>
      )}

      {publicRoutes.map(({path, Component}) =>
        <Route key={`key-${path}`} path={path} component={Component} exact/>
      )}
      <Redirect to={SHOP_ROUTE_PATH}/>
    </Switch>
  );
};

export default AppRouter;
