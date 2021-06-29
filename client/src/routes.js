import {
  ADMIN_ROUTE_PATH,
  BASKET_ROUTE_PATH,
  DEVICE_ROUTE_PATH,
  LOGIN_ROUTE_PATH,
  REGISTRATION_ROUTE_PATH,
  SHOP_ROUTE_PATH,
} from './utils/constants';
import DevicePage from './pages/DevicePage';
import AdminPanel from './pages/AdminPanel';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Auth from './pages/Auth';

export const authRoutes = [
  {
    path: ADMIN_ROUTE_PATH,
    Component: AdminPanel,
  },
  {
    path: BASKET_ROUTE_PATH,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE_PATH,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE_PATH,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE_PATH,
    Component: Auth,
  },
  {
    path: `${DEVICE_ROUTE_PATH}/:id`,
    Component: DevicePage,
  },
];
