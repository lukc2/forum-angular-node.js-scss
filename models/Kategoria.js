module.exports=(sequelize,DataTypes)=>{
    const Kategoria=sequelize.define('kategoria',{
        nazwa:{
            type: DataTypes.TEXT,
            allowNull:false,
            unique: true
        },
    },{
        tableName: 'kategoria',
        timestamps:false
    });
    return Kategoria;
};