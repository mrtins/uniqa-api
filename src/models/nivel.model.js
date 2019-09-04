export default (sequelize, DataTypes) => {
  const Nivel = sequelize.define('Nivel',
    {
      id: {
        field: 'id_nivel',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      codigoNivel: {
        field: 'cd_nivel',
        type: DataTypes.STRING,
        allowNull: false,
      },
      experiencia: {
        field: 'nr_experiencia',
        type: DataTypes.INTEGER,
        allowNull: true,
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
      tableName: 'tb_nivel',
      createdAt: 'dhInclusao',
      updatedAt: 'dhAlteracao',
    }
  );

  Nivel.associate = function (models) {
    Nivel.belongsTo(models.Usuario, {
      foreignKey: {
        name: 'idUsuarioInclusao',
        field: 'id_usuario_inclusao'
      },
      as: 'usuarioInclusao'
    });

    Nivel.belongsTo(models.Usuario, {
      foreignKey: {
        name: 'idUsuarioAlteracao',
        field: 'id_usuario_alteracao'
      },
      as: 'usuarioAlteracao'
    });

    models.Nivel.hasMany(models.Usuario, {
      foreignKey: {
        name: 'idNivel',
        field: 'id_nivel'
      },
      as: 'usuario'
    });
  }

  return Nivel;
}