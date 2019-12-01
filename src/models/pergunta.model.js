export default (sequelize, DataTypes) => {
  const Pergunta = sequelize.define('Pergunta',
    {
      id: {
        field: 'id_pergunta',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        field: 'tx_titulo',
        type: DataTypes.STRING,
        allowNull: false,
      },
      pergunta: {
        field: 'tx_pergunta',
        type: DataTypes.STRING,
        allowNull: false,
      },
      dataPublicacao: {
        field: 'dh_data_publicacao',
        type: DataTypes.DATE,
        allowNull: false,
      },
      likes: {
        field: 'nr_likes',
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dislikes: {
        field: 'nr_dislikes',
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      schema: 'qa',
      tableName: 'tb_pergunta',
    }
  );

  Pergunta.associate = function (models) {
    Pergunta.belongsTo(models.Usuario, {
      foreignKey: {
        name: 'idUsuario',
        field: 'id_usuario'
      },
      as: 'usuario'
    });

    models.Pergunta.hasMany(models.PerguntaTag, {
      foreignKey: {
        name: 'idPergunta',
        field: 'id_pergunta'
      },
      as: 'perguntaTag'
    });
  }

  return Pergunta;
}