import { Router } from 'express';
import { getUsers, getUser, createUsers, updateUser, deleteUser, mensajeUser } from "../controllers/user.controler";
const routes = Router();


routes.get('/', mensajeUser)
routes.get('/users', getUsers)
routes.get('/users/:id', getUser)
routes.post('/users', createUsers)
routes.put('/users', updateUser)
routes.delete('/users/:id', deleteUser)

export default routes;