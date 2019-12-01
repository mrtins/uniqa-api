export default (sequelize, DataTypes) => {
  const Titulo = sequelize.define('Titulo',
    {
      id: {
        field: 'id_titulo',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nomeTitulo: {
        field: 'nm_titulo',
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      schema: 'qa',
      tableName: 'tb_titulo',
      // createdAt: 'dhInclusao',
      // updatedAt: 'dhAlteracao',
    }
  );

  Titulo.associate = function (models) {
  
    models.Titulo.hasMany(models.UsuarioTitulo, {
      foreignKey: {
        name: 'idTitulo',
        field: 'id_titulo'
      },
      as: 'usuarioTitulo'
    });
  }

  return Titulo;
}