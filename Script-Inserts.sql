INSERT 
into	qa.tb_curso
(nm_curso)
VALUES('Sistemas de Informação');

INSERT 
into	qa.tb_perfil
(nm_perfil)
VALUES('Administrador Geral');

INSERT 
into	qa.tb_titulo
(nm_titulo)
VALUES('Administrador Geral');

INSERT 
into	qa.tb_nivel
(cd_nivel, nr_experiencia)
VALUES('1', 0);


INSERT 
into	qa.tb_usuario
(
	id_perfil
	, id_nivel
	, id_curso
	, nm_usuario
	, nm_nome
	, nm_sobrenome
	, tx_senha
	, dt_nascimento
	, nr_experiencia
	, dh_inclusao
)
values
(
	1
	, 1
	, 1
	, 'admin'
	, 'Administrador'
	, 'Geral'
	, 'admin'
	, '2019/09/03'
	, 99
	, '2019-09-03 17:26:54'
);
