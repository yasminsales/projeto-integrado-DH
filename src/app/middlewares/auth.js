import authConfig from '../../config/auth';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export default async (request , response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ error: 'token não fornecido' })
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        request.usuarioId = decoded.id; 

        return next();
    } catch (err) {
        return response.status(401).json({ error: 'Token inválido' })
    }
}