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
      dhInclusao: {
        field: 'dh_inclusao',
        type: DataTypes.DATE,
        allowNull: false,
      },
      dhAlteracao: {
        field: 'dh_alteracao',
        type: DataTypes.DATE,
        allowNull: true,
      }
    },
    {
      schema: 'qa',
      tableName: 'tb_titulo',
      createdAt: 'dhInclusao',
      updatedAt: 'dhAlteracao',
    }
  );

  Titulo.associate = function (models) {
    Titulo.belongsTo(models.Usuario, {
      foreignKey: {
        name: 'idUsuarioInclusao',
        field: 'id_usuario_inclusao'
      },
      as: 'usuarioInclusao'
    });

    Titulo.belongsTo(models.Usuario, {
      foreignKey: {
        name: 'idUsuarioAlteracao',
        field: 'id_usuario_alteracao'
      },
      as: 'usuarioAlteracao'
    });

    models.Titulo.hasMany(models.Usuario, {
      foreignKey: {
        name: 'idTitulo',
        field: 'id_titulo'
      },
      as: 'usuario'
    });
  }

  return Titulo;
}