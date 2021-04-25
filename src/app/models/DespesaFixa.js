import Sequelize, { Model } from 'sequelize'; 

class DespesaFixa extends Model { 
    static init (sequelize){
        super.init({
            educacao: Sequelize.DECIMAL, 
            gastos_fixos: Sequelize.DECIMAL,            
        }, 
        { 
            sequelize
        }, 
    )};
}

export default DespesaFixa;