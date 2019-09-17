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
    },
    {
      schema: 'qa',
      tableName: 'tb_perfil',
    }
  );

  Perfil.associate = function (models) {
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