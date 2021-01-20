const Sequelize=require('sequelize');
const db=require('../config/database');

const Post=db.define('post',{
    watek_id:{
        type: Sequelize.INTEGER
    },
    uzytkownik_id:{
        type: Sequelize.INTEGER
    },
    tresc:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    data_wyslania:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
},{
    tableName: 'post',
    timestamps:false
});
module.exports=Post;