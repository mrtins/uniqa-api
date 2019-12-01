export default (sequelize, DataTypes) => {
  const Resposta = sequelize.define('Resposta',
    {
      id: {
        field: 'id_resposta',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      resposta: {
        field: 'tx_resposta',
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
        default: 0
      },
      dislikes: {
        field: 'nr_dislikes',
        type: DataTypes.INTEGER,
        allowNull: true,
        default: 0
      },
    },
    {
      schema: 'qa',
      tableName: 'tb_resposta',
    }
  );

  Resposta.associate = function (models) {
    Resposta.belongsTo(models.Usuario, {
      foreignKey: {
        name: 'idUsuario',
        field: 'id_usuario'
      },
      as: 'usuario'
    });

    Resposta.belongsTo(models.Pergunta, {
      foreignKey: {
        name: 'idPergunta',
        field: 'id_pergunta'
      },
      as: 'pergunta'
    });
  }

  return Resposta;
}