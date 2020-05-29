import { Router } from 'express';
import { getUsers, getUser, createUsers, updateUser, deleteUser, mensajeUser } from "../controllers/user.controler";
const routes = Router();


routes.get('/', mensajeUser)
routes.get('/developers', getUsers)
routes.get('/developers/:id', getUser)
routes.post('/developers', createUsers)
routes.put('/developers', updateUser)
routes.delete('/developers/:id', deleteUser)

export default routes;