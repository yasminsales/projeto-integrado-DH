import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/Usuarios'; 
import Salario from '../app/models/Salario'; 

const models = [User, Salario];

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