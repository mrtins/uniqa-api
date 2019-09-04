export default (sequelize, DataTypes) => {
  const Curso = sequelize.define('Curso',
    {
      id: {
        field: 'id_curso',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nomeCurso: {
        field: 'nm_curso',
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
      tableName: 'tb_curso',
      createdAt: 'dhInclusao',
      updatedAt: 'dhAlteracao',
    }
  );

  Curso.associate = function (models) {
    Curso.belongsTo(models.Usuario, {
      foreignKey: {
        name: 'idUsuarioInclusao',
        field: 'id_usuario_inclusao'
      },
      as: 'usuarioInclusao'
    });

    Curso.belongsTo(models.Usuario, {
      foreignKey: {
        name: 'idUsuarioAlteracao',
        field: 'id_usuario_alteracao'
      },
      as: 'usuarioAlteracao'
    });

    models.Curso.hasMany(models.Usuario, {
      foreignKey: {
        name: 'idCurso',
        field: 'id_curso'
      },
      as: 'usuario'
    });
  }

  return Curso;
}