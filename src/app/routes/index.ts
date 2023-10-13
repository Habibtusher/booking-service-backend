import express from 'express';
import { userRoute } from '../modules/user/user.routes';
import { authRoute } from '../modules/auth/auth.routes';

const router = express.Router();
const moduleRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
];
moduleRoutes.map(route => {
    router.use(route.path, route.route);
  });

export default router;
