module.exports=module.exports=(sequelize,DataTypes)=>{
    const Post=sequelize.define('post',{
        watek_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        uzytkownik_id:{
            type: DataTypes.INTEGER,
            allowNull: false
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