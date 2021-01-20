const Sequelize=require('sequelize');
const db=require('../config/database');

const Watek=db.define('watek',{
    kategoria_id:{
        type: Sequelize.INTEGER
    },
    uzytkownik_id:{
        type: Sequelize.INTEGER
    },
    nazwa:{
        type: Sequelize.TEXT,
        allowNull:false,
        unique: true
    },
    data_zalozenia:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    data_modyfikacji:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },

},{
    tableName: 'post',
    timestamps:false
});
module.exports=Watek;