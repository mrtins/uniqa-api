export default (sequelize, DataTypes) => {
  const UsuarioTitulo = sequelize.define('UsuarioTitulo',
    {
      id: {
        field: 'id_usuario_titulo',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {
      schema: 'qa',
      tableName: 'tb_usuario_titulo',
      // createdAt: 'dhInclusao',
      // updatedAt: 'dhAlteracao',
    }
  );

  UsuarioTitulo.associate = function (models) {
    UsuarioTitulo.belongsTo(models.Usuario, {
      foreignKey: {
        name: 'idUsuario',
        field: 'id_usuario'
      },
      as: 'usuario'
    });

    UsuarioTitulo.belongsTo(models.Titulo, {
      foreignKey: {
        name: 'idTitulo',
        field: 'id_titulo'
      },
      as: 'titulo'
    });
  }

  return UsuarioTitulo;
}