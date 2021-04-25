import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import UsuarioController from './app/controllers/UsuarioController';
import RendaController from './app/controllers/RendaController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/usuarios', UsuarioController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.put('/usuarios', UsuarioController.update);
routes.post('/renda', RendaController.store);

export default routes;