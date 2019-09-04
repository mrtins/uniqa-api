export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag',
    {
      id: {
        field: 'id_tag',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nomeTag: {
        field: 'nm_tag',
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      schema: 'qa',
      tableName: 'tb_tag',
    }
  );

  Tag.associate = function (models) {
    /* Possui */
    models.Tag.hasMany(models.PerguntaTag, {
      foreignKey: {
        name: 'idTag',
        field: 'id_tag'
      },
      as: 'perguntaTag'
    });
  }

  return Tag;
}