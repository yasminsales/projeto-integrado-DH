import Salario from '../models/Salario';
import * as Yup from 'yup';

class RendaController {
    async store(request, response) {
		const schema = Yup.object().shape({ 
            salario: Yup.string().required()
        });

        if(!( await schema.isValid(request.body))) { 
            return response.status(400).json({ error: 'Falha ao validar.' })
        }

        request.body.usuario = request.usuarioId;

		await Salario.create(request.body);

		return response.json({
			valor: 1
		});
	}

    async update(request, response) {
		const { Renda, } = request.body;

		console.log("update usuarioId: " + request.usuarioId);
		const usuario = await Usuario.findByPk(request.usuarioId);

		if (email && email !== usuario.email) {
			const usuarioExists = await Usuario.findOne({ where: { email  } } );

			if (usuarioExists) {
				return response.status(400).json({ error: 'Usuário já existe!'})
			}
		}
}}

export default new RendaController();