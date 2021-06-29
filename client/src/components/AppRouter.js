import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE_PATH } from '../utils/constants';
import Context from '../store/Context';

const AppRouter = observer(() => {
  const { userStore } = useContext(Context);
  return (
    <Switch>
      { userStore.getIsAuth && authRoutes.map(({ path, Component }) => (
        <Route key={`key-${path}`} path={path} component={Component} exact />
      ))}

      { publicRoutes.map(({ path, Component }) => (
        <Route key={`key-${path}`} path={path} component={Component} exact />
      ))}
      <Redirect to={SHOP_ROUTE_PATH} />
    </Switch>
  );
});

export default AppRouter;
