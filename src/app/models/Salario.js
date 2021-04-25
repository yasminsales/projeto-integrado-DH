import Sequelize, { Model } from 'sequelize'; 

class Salario extends Model { 
    static init (sequelize){
        super.init({
            salario: Sequelize.DECIMAL, 
            valor_extra: Sequelize.DECIMAL,            
            usuario: Sequelize.INTEGER
        }, 
        { 
            sequelize
        }, 
    )};
}

// Renda.Usuario = Renda.hasOne(Usuarios); 

export default Salario;