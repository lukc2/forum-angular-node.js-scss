module.exports=module.exports=(sequelize,DataTypes)=>{
    const Post=sequelize.define('post',{
        watek_id:{
            type: DataTypes.INTEGER
        },
        uzytkownik_id:{
            type: DataTypes.INTEGER
        },
        tresc:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        data_wyslania:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
    },{
        tableName: 'post',
        timestamps:false
    });
    return Post;
};