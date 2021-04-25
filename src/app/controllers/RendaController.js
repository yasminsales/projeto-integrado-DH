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
}
export default new RendaController();