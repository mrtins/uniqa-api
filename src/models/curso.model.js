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
    },
    {
      schema: 'qa',
      tableName: 'tb_curso',
      // createdAt: 'dhInclusao',
      // updatedAt: 'dhAlteracao',
    }
  );

  Curso.associate = function (models) {
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