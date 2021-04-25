import Sequelize, { Model } from 'sequelize'; //importar o Model de dentro do sequelize
import bcrypt from 'bcryptjs';

class Usuarios extends Model {
    static init(sequelize) {
		super.init({
			name: Sequelize.STRING,
			email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
			password_hash: Sequelize.STRING,
			provider: Sequelize.BOOLEAN,
		}, 
		{
			sequelize,
		}
	
		);

		this.addHook('beforeSave', async (usuario) => {
			if (usuario.password) {
				usuario.password_hash = await bcrypt.hash(usuario.password, 8);

			}
		});

		return this;
	}

	checkPassword(password) {
		return bcrypt.compare(password, this.password_hash);
	}
}

export default Usuarios;
