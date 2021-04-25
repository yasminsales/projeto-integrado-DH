import Sequelize, { Model } from 'sequelize'; 

class DespesaVariavel extends Model { 
    static init (sequelize){
        super.init({
            investimentos: Sequelize.DECIMAL, 
            lazer: Sequelize.DECIMAL,            
        }, 
        { 
            sequelize
        }, 
    )};
}

export default DespesaVariavel;