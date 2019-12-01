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
    },
    {
      schema: 'qa',
      tableName: 'tb_usuario',
      // createdAt: 'dhInclusao',
      // updatedAt: 'dhAlteracao',
    }
  );

  Usuario.associate = function (models) {
    /* Pertence */
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

    /* Possui */
    models.Usuario.hasMany(models.Pergunta, {
      foreignKey: {
        name: 'idUsuario',
        field: 'id_usuario'
      },
      as: 'perguntas'
    });

    models.Usuario.hasMany(models.UsuarioTitulo, {
      foreignKey: {
        name: 'idUsuario',
        field: 'id_usuario'
      },
      as: 'usuarioTitulo'
    });
  }

  return Usuario;
}