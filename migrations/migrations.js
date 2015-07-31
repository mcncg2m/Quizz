module.exports = { up: function(migration, DataTypes) { // Logica con los cambios de la BBDD, En este ejemplo se crea la columna tema en la tabla Quizzes migration.addColumn( 'Quizzes', 'tema', { type: DataTypes.STRING, allowNull: true, defaultValue: 'otro' } ) },

down: function(migration, DataTypes) { // Logica en caso de querer revertir los cambios (para mas info ver sequelize --help) } }
