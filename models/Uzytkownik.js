const Sequelize=require('sequelize');
const db=require('../config/database');

const Uzytkownik=db.define('uzytkownik',{
    nazwa:{
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "test"
    },
    login:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    haslo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    email:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    ranga:{
        type: Sequelize.TEXT,
        defaultValue: "user"
    },
},{
    tableName: 'post',
    timestamps:false
});
module.exports=Uzytkownik;