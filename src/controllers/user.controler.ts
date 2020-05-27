import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import { User } from "../entities/User";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users);
}

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).findOne(req.params.id);
    return res.json(users);
}

export const createUsers = async (req: Request, res: Response): Promise<Response> => {
    const nuevoUsuario = getRepository(User).create(req.body);
    const results = await getRepository(User).save(nuevoUsuario);
    return res.json(results);
}


export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.body)
    const usuario = await getRepository(User).findOne(req.body.id);
    if (usuario) {
        getRepository(User).merge(usuario, req.body);
        const results = await getRepository(User).save(usuario)
        return res.json(results)
    }
    return res.status(200).send('No Se Encontro el registro para actualizar');
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).delete(req.params.id);    
    return res.send(results);
}







