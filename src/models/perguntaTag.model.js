export default (sequelize, DataTypes) => {
  const PerguntaTag = sequelize.define('PerguntaTag',
    {
      id: {
        field: 'id_pergunta_tag',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {
      schema: 'qa',
      tableName: 'tb_pergunta_tag',
      // createdAt: 'dhInclusao',
      // updatedAt: 'dhAlteracao',
    }
  );

  PerguntaTag.associate = function (models) {
    PerguntaTag.belongsTo(models.Pergunta, {
      foreignKey: {
        name: 'idPergunta',
        field: 'id_pergunta'
      },
      as: 'pergunta'
    });

    PerguntaTag.belongsTo(models.Tag, {
      foreignKey: {
        name: 'idTag',
        field: 'id_tag'
      },
      as: 'tag'
    });
  }

  return PerguntaTag;
}