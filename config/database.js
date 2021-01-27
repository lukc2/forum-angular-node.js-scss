const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Uzytkownik = require("../models/Uzytkownik")(sequelize, Sequelize);
db.Watek = require("../models/Watek")(sequelize, Sequelize);
db.Post = require("../models/Post")(sequelize, Sequelize);
db.Kategoria = require("../models/Kategoria")(sequelize, Sequelize);

//RELACJE tabel

//watek-kategoria
db.Watek.belongsTo(db.Kategoria, {
    foreignKey: 'kategoria_id',
    allowNull: false
});
db.Kategoria.hasMany(db.Watek, {
    foreignKey: 'kategoria_id',
    allowNull: false
});
//post-watek
db.Post.belongsTo(db.Watek, {
    foreignKey: 'watek_id',
    allowNull: false
});
db.Watek.hasMany(db.Post, {
    foreignKey: 'watek_id',
    allowNull: false
});
//post-uzytkownik
db.Post.belongsTo(db.Uzytkownik, {
    foreignKey: 'uzytkownik_id',
    allowNull: false
});
db.Uzytkownik.hasMany(db.Post, {
    foreignKey: 'uzytkownik_id',
    allowNull: false
});
//watek-uzytkownik
db.Watek.belongsTo(db.Uzytkownik, {
    foreignKey: 'uzytkownik_id',
    allowNull: false
});
db.Uzytkownik.hasMany(db.Watek, {
    foreignKey: 'uzytkownik_id',
    allowNull: false
});

module.exports = db;