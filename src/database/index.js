import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/Usuarios'; 
import Renda from '../app/models/Renda'; 
import Salario from '../app/models/Salario'; 

const models = [User, Renda, Salario];

class Database { 
    constructor() { 
        this.init();
    }
    
    init() { 
        this.connection = new Sequelize (databaseConfig); 

        models.map( model => model.init(this.connection));
    }
}

export default new Database(); 