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

		const salario = await Salario.findByPk(request.body.id); 	
        request.body.usuario = request.usuarioId;

        const {salarioAtualizado, valor_extra} = await salario.update(request.body);

        return response.json({
			salarioAtualizado,
			valor_extra
		});
    }     

    async query(request, response) {
		const salarios = await Salario.findAll({usuario: request.usuarioId}); 	

        return response.json(salarios);
    }   
    async delete(request, response) {
		const salario = await Salario.findByPk(request.body.id); 	
        salario.destroy();

        return response.json({success: true});
    }  
    
    
}

export default new RendaController();