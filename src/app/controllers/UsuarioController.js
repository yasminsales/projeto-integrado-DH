import Usuario from '../models/Usuarios';
import * as Yup from 'yup';

class UsuarioController {
    async store(request, response) {
		const schema = Yup.object().shape({ 
            name: Yup.string().required(), 
            email: Yup.string().required(),
            password: Yup.string().required().min(6),
        });

        if(!( await schema.isValid(request.body))) { 
            return response.status(400).json({ error: 'Falha ao validar.' })
        }
		const usuarioExists = await Usuario.findOne({ where: { email: request.body.email } } );
				
		// se existir, vou devolver uma mensagem de erro
		if (usuarioExists) {
			return response.status(400).json({ error: 'Usuário já existe!'})
		}

		const { id, name, email, provider } = await Usuario.create(request.body); // aqui eu poderia fazer a destruturação e pegar dados por dados, mas a minha model já está tratando isso

		return response.json({
			id,
			name,
			email,
			provider,
		});
	}

	async update(request, response) {
		const { email, oldPassword} = request.body;

		console.log("update usuarioId: " + request.usuarioId);
		const usuario = await Usuario.findByPk(request.usuarioId);

		if (email && email !== usuario.email) {
			const usuarioExists = await Usuario.findOne({ where: { email  } } );

			if (usuarioExists) {
				return response.status(400).json({ error: 'Usuário já existe!'})
			}
		}

		if (oldPassword && !(await usuario.checkPassword(oldPassword))) {
			return response.status(401).json({ error: 'Senha não corresponde.' });
		}

		const {id, name, provider} = await usuario.update(request.body);

		return response.json({
			id,
			name,
			email,
			provider,
		});
	}
}

export default new UsuarioController();
