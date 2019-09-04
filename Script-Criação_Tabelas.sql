create schema qa;

create table qa.tb_perfil 
(
	ID_Perfil			serial		not null
	, NM_Perfil			varchar(60)	not null
);

alter table qa.tb_perfil add constraint pk_perfil primary key (id_perfil);

create table qa.tb_curso
(
	ID_Curso		serial			not null
	, nm_curso		varchar(120)	not null
);

alter table qa.tb_curso add constraint pk_curso primary key (ID_Curso);

create table qa.tb_nivel
(
	id_nivel			serial		not null
	, cd_nivel			varchar(20)	not null
	, nr_experiencia	integer		not null
);

alter table qa.tb_nivel add constraint pk_nivel primary key (id_nivel);

create table qa.tb_titulo
(
	id_titulo		serial			not null
	, nm_titulo		varchar(120)	not null
);

alter table qa.tb_titulo add constraint pk_titulo primary key (id_titulo);

create table qa.tb_usuario
(
	id_usuario					serial			not null
	, id_perfil					integer			not null
	, id_curso					integer			null
	, id_nivel					integer			not null
	, id_titulo					integer			null
	, nm_usuario				varchar(20)		not null
	, nm_nome					varchar(30)		not null
	, nm_sobrenome				varchar(160)	null
	, tx_senha					varchar(500)	not null
	, dt_nascimento				date			not null
	, nr_experiencia			integer			null
	, id_usuario_inclusao		integer			null
	, dh_inclusao				timestamp		not null
	, id_usuario_alteracao		integer			null
	, dh_alteracao				timestamp		null
);

alter table qa.tb_usuario add constraint pk_usuario primary key (id_usuario);
alter table qa.tb_usuario add constraint tb_usuario_fk_perfil foreign key (id_perfil) references qa.tb_perfil (id_perfil);
alter table qa.tb_usuario add constraint tb_usuario_fk_curso foreign key (id_curso) references qa.tb_curso (id_curso);
alter table qa.tb_usuario add constraint tb_usuario_fk_nivel foreign key (id_nivel) references qa.tb_nivel (id_nivel);
alter table qa.tb_usuario add constraint tb_usuario_fk_titulo foreign key (id_titulo) references qa.tb_titulo (id_titulo);
alter table qa.tb_usuario add constraint tb_usuario_fk_usuario_inclusao foreign key (id_usuario_inclusao) references qa.tb_usuario (id_usuario);
alter table qa.tb_usuario add constraint tb_usuario_fk_usuario_alteracao foreign key (id_usuario_alteracao) references qa.tb_usuario (id_usuario);


--------------
-- Perfil
alter table qa.tb_perfil add column id_usuario_inclusao integer null;
alter table qa.tb_perfil add column dh_inclusao timestamp null;
alter table qa.tb_perfil add constraint tb_perfil_fk_usuario_inclusao foreign key (id_usuario_inclusao) references qa.tb_usuario (id_usuario);

alter table qa.tb_perfil add column id_usuario_alteracao integer null;
alter table qa.tb_perfil add column dh_alteracao timestamp null;
alter table qa.tb_perfil add constraint tb_perfil_fk_usuario_alteracao foreign key (id_usuario_alteracao) references qa.tb_usuario (id_usuario);

-- Curso
alter table qa.tb_curso add column id_usuario_inclusao integer null;
alter table qa.tb_curso add column dh_inclusao timestamp null;
alter table qa.tb_curso add constraint tb_curso_fk_usuario_inclusao foreign key (id_usuario_inclusao) references qa.tb_usuario (id_usuario);

alter table qa.tb_curso add column id_usuario_alteracao integer null;
alter table qa.tb_curso add column dh_alteracao timestamp null;
alter table qa.tb_curso add constraint tb_curso_fk_usuario_alteracao foreign key (id_usuario_alteracao) references qa.tb_usuario (id_usuario);

-- Nivel
alter table qa.tb_nivel add column id_usuario_inclusao integer null;
alter table qa.tb_nivel add column dh_inclusao timestamp null;
alter table qa.tb_nivel add constraint tb_nivel_fk_usuario_inclusao foreign key (id_usuario_inclusao) references qa.tb_usuario (id_usuario);

alter table qa.tb_nivel add column id_usuario_alteracao integer null;
alter table qa.tb_nivel add column dh_alteracao timestamp null;
alter table qa.tb_nivel add constraint tb_nivel_fk_usuario_alteracao foreign key (id_usuario_alteracao) references qa.tb_usuario (id_usuario);

-- Titulo
alter table qa.tb_titulo add column id_usuario_inclusao integer null;
alter table qa.tb_titulo add column dh_inclusao timestamp null;
alter table qa.tb_titulo add constraint tb_titulo_fk_usuario_inclusao foreign key (id_usuario_inclusao) references qa.tb_usuario (id_usuario);

alter table qa.tb_titulo add column id_usuario_alteracao integer null;
alter table qa.tb_titulo add column dh_alteracao timestamp null;
alter table qa.tb_titulo add constraint tb_titulo_fk_usuario_alteracao foreign key (id_usuario_alteracao) references qa.tb_usuario (id_usuario);
--------------

create table qa.tb_usuario_titulo
(
	id_usuario_titulo			serial		not null
	, id_usuario				integer		not null
	, id_titulo					integer		not null
	, id_usuario_inclusao		integer		not null
	, dh_inclusao				date		not null
	, id_usuario_alteracao		integer		null
	, dh_alteracao				date		null
);

alter table qa.tb_usuario_titulo add constraint pk_usuario_titulo primary key (id_usuario_titulo);
alter table qa.tb_usuario_titulo add constraint tb_usuario_titulo_fk_usuario foreign key (id_usuario) references qa.tb_usuario (id_usuario);
alter table qa.tb_usuario_titulo add constraint tb_usuario_titulo_fk_titulo  foreign key (id_titulo) references qa.tb_titulo (id_titulo);
alter table qa.tb_usuario_titulo add constraint tb_usuario_titulo_fk_usuario_inclusao foreign key (id_usuario_inclusao) references qa.tb_usuario (id_usuario);
alter table qa.tb_usuario_titulo add constraint tb_usuario_titulo_fk_usuario_alteracao foreign key (id_usuario_alteracao) references qa.tb_usuario (id_usuario);

create table qa.tb_tag 
(
	id_tag						serial				not null
	, nm_tag					varchar(200)		not null
	, id_usuario_inclusao		integer				not null
	, dh_inclusao				date				not null
	, id_usuario_alteracao		integer				null
	, dh_alteracao				date				null
);

alter table qa.tb_tag add constraint pk_tag primary key (id_tag);
alter table qa.tb_tag add constraint tb_tag_fk_usuario_inclusao foreign key (id_usuario_inclusao) references qa.tb_usuario (id_usuario);
alter table qa.tb_tag add constraint tb_tag_fk_usuario_alteracao foreign key (id_usuario_alteracao) references qa.tb_usuario (id_usuario);

create table qa.tb_pergunta
(
	id_pergunta					serial				not null
	, id_usuario				integer				not null
	, tx_titulo					varchar(500)		not null
	, tx_pergunta				varchar(5000)		not null
	, dh_data_publicacao		date				not null
	, nr_likes					integer				null
	, nr_dislikes				integer				null
	, id_usuario_inclusao		integer				not null
	, dh_inclusao				date				not null
	, id_usuario_alteracao		integer				null
	, dh_alteracao				date				null
);

alter table qa.tb_pergunta add constraint pk_pergunta primary key (id_pergunta);
alter table qa.tb_pergunta add constraint tb_pergunta_fk_usuario foreign key (id_usuario) references qa.tb_usuario (id_usuario);
alter table qa.tb_pergunta add constraint tb_pergunta_fk_usuario_inclusao foreign key (id_usuario_inclusao) references qa.tb_usuario (id_usuario);
alter table qa.tb_pergunta add constraint tb_pergunta_fk_usuario_alteracao foreign key (id_usuario_alteracao) references qa.tb_usuario (id_usuario);

create table qa.tb_pergunta_tag
(
	id_pergunta_tag				serial				not null
	, id_tag					integer				not null
	, id_usuario_inclusao		integer				not null
	, dh_inclusao				date				not null
	, id_usuario_alteracao		integer				null
	, dh_alteracao				date				null
);

alter table qa.tb_pergunta_tag add constraint pk_pergunta_tag primary key (id_pergunta_tag);
alter table qa.tb_pergunta_tag add constraint tb_pergunta_tag_fk_tag foreign key (id_tag) references qa.tb_tag  (id_tag);
alter table qa.tb_pergunta_tag add constraint tb_pergunta_tag_fk_usuario_inclusao foreign key (id_usuario_inclusao) references qa.tb_usuario (id_usuario);
alter table qa.tb_pergunta_tag add constraint tb_pergunta_tag_fk_usuario_alteracao foreign key (id_usuario_alteracao) references qa.tb_usuario (id_usuario);

create table qa.tb_resposta
(
	id_respota					serial				not null
	, id_pergunta				integer				not null
	, id_usuario				integer				not null
	, tx_resposta				varchar(5000)		not null
	, dh_data_publicacao		date				not null
	, nr_likes					integer				null
	, nr_dislikes				integer				null
	, id_usuario_inclusao		integer				not null
	, dh_inclusao				date				not null
	, id_usuario_alteracao		integer				null
	, dh_alteracao				date				null
);

alter table qa.tb_resposta add constraint pk_resposta primary key (id_respota);
alter table qa.tb_resposta add constraint tb_reposta_fk_pergunta foreign key (id_pergunta) references qa.tb_pergunta (id_pergunta);
alter table qa.tb_resposta add constraint tb_reposta_fk_usuario foreign key (id_usuario) references qa.tb_usuario (id_usuario);
alter table qa.tb_resposta add constraint tb_reposta_fk_usuario_inclusao foreign key (id_usuario_inclusao) references qa.tb_usuario (id_usuario);
alter table qa.tb_resposta add constraint tb_reposta_fk_usuario_alteracao foreign key (id_usuario_alteracao) references qa.tb_usuario (id_usuario);
