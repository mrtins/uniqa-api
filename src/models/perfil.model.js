export default (sequelize, DataTypes) => {
  const Perfil = sequelize.define('Perfil',
    {
      id: {
        field: 'id_perfil',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nomePerfil: {
        field: 'nm_perfil',
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
      tableName: 'tb_perfil',
      createdAt: 'dhInclusao',
      updatedAt: 'dhAlteracao',
    }
  );

  Perfil.associate = function (models) {
    Perfil.belongsTo(models.Usuario, {
      foreignKey: {
        name: 'idUsuarioInclusao',
        field: 'id_usuario_inclusao'
      },
      as: 'usuarioInclusao'
    });

    Perfil.belongsTo(models.Usuario, {
      foreignKey: {
        name: 'idUsuarioAlteracao',
        field: 'id_usuario_alteracao'
      },
      as: 'usuarioAlteracao'
    });

    models.Perfil.hasMany(models.Usuario, {
      foreignKey: {
        name: 'idPerfil',
        field: 'id_perfil'
      },
      as: 'usuario'
    });
  }

  return Perfil;
}