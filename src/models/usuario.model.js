export default (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario',
    {
      id: {
        field: 'id_usuario',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nomeUsuario: {
        field: 'nm_usuario',
        type: DataTypes.STRING,
        allowNull: false,
      },
      nome: {
        field: 'nm_nome',
        type: DataTypes.STRING,
        allowNull: false,
      },
      sobrenome: {
        field: 'nm_sobrenome',
        type: DataTypes.STRING,
        allowNull: true,
      },
      senha: {
        field: 'tx_senha',
        type: DataTypes.STRING,
        allowNull: false,
      },
      dataNascimento: {
        field: 'dt_nascimento',
        type: DataTypes.DATE,
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
      tableName: 'tb_usuario',
      createdAt: 'dhInclusao',
      updatedAt: 'dhAlteracao',
    }
  );

  Usuario.associate = function (models) {
    Usuario.belongsTo(models.Perfil, {
      foreignKey: {
        name: 'idPerfil',
        field: 'id_perfil'
      },
      as: 'perfil'
    });

    Usuario.belongsTo(models.Curso, {
      foreignKey: {
        name: 'idCurso',
        field: 'id_curso'
      },
      as: 'curso'
    });

    Usuario.belongsTo(models.Nivel, {
      foreignKey: {
        name: 'idNivel',
        field: 'id_nivel'
      },
      as: 'nivel'
    });

    Usuario.belongsTo(models.Titulo, {
      foreignKey: {
        name: 'idTitulo',
        field: 'id_titulo'
      },
      as: 'titulo'
    });
  }

  return Usuario;
}