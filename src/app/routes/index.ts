import express from 'express';
import { userRoute } from '../modules/user/user.routes';
import { authRoute } from '../modules/auth/auth.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { ServiceRoutes } from '../modules/service/service.routes';
import { ReviewsRoutes } from '../modules/reviews/reviews.route';

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
  {
    path: '/category',
    route: CategoryRoutes,
  },
  {
    path: '/service',
    route: ServiceRoutes,
  },
  {
    path: '/review',
    route: ReviewsRoutes,
  },
];
moduleRoutes.map(route => {
    router.use(route.path, route.route);
  });

export default router;
