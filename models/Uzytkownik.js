module.exports = module.exports = (sequelize, DataTypes) => {
    const Uzytkownik = sequelize.define('uzytkownik', {
        nazwa: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "test",
            unique: true
        },
        login: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        haslo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ranga: {
            type: DataTypes.TEXT,
            defaultValue: "user"
        },
    }, {
        tableName: 'uzytkownik',
        timestamps: false
    });

    return Uzytkownik;
};