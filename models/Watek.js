module.exports=module.exports=(sequelize,DataTypes)=>{
    const Watek=sequelize.define('watek',{
        kategoria_id:{
            type: DataTypes.INTEGER
        },
        uzytkownik_id:{
            type: DataTypes.INTEGER
        },
        nazwa:{
            type: DataTypes.TEXT,
            allowNull:false,
            unique: true
        },
        data_zalozenia:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        data_modyfikacji:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
    
    },{
        tableName: 'watek',
        timestamps:false
    });
    return Watek;
};