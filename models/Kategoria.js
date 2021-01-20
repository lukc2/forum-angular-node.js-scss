const Sequelize=require('sequelize');
const db=require('../config/database');

const Kategoria=db.define('kategoria',{
    nazwa:{
        type: Sequelize.TEXT,
        allowNull:false,
        unique: true
    },
},{
    tableName: 'post',
    timestamps:false
});
module.exports=Kategoria;