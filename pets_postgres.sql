CREATE SEQUENCE usuario_seq;

CREATE TABLE usuario (
id_usuario INT DEFAULT NEXTVAL ('usuario_seq') UNIQUE,
email Varchar(150) UNIQUE,
senha Varchar(80),
nome Varchar(150),
telefone Varchar(11),
imagem Varchar(30),
status Varchar(1),
tipo Varchar(1),
fb Varchar(50),
instg Varchar(50),
wtsp Varchar(11),
data_cad timestamp(0),
PRIMARY KEY(id_usuario,email)
);

CREATE SEQUENCE endereco_seq;

CREATE TABLE endereco (
id_endereco INT PRIMARY KEY DEFAULT NEXTVAL ('endereco_seq') UNIQUE,
id_usuario INT NOT NULL,
rua Varchar(50),
num Varchar(11),
bairro Varchar(30),
cidade Varchar(50),
estado Varchar(50),
data_cad timestamp(0)
);


CREATE SEQUENCE evento_seq;

CREATE TABLE evento (
id_evento INT PRIMARY KEY DEFAULT NEXTVAL ('evento_seq') UNIQUE,
id_usuario INT NOT NULL,
id_endereco INT NOT NULL,
data date,
titulo Varchar(50),
descricao Varchar(1500),
imagem Varchar(50),
data_cad timestamp(0)
);

CREATE SEQUENCE pet_seq;

CREATE TABLE pet (
id_pet INT PRIMARY KEY DEFAULT NEXTVAL ('pet_seq') UNIQUE,
id_usuario INT NOT NULL,
id_endereco INT NOT NULL,
nome_pet Varchar(30) NOT NULL,
idade_pet int NOT NULL,
especie Varchar(50),
porte Varchar(30),
descricao Varchar(1500),
status Varchar(30),
data_cad timestamp(0)
);


CREATE SEQUENCE mensagens_seq;

CREATE TABLE mensagens (
id_mensagem INT PRIMARY KEY DEFAULT NEXTVAL ('mensagens_seq') UNIQUE,
id_pet INT NOT NULL,
id_doador INT NOT NULL,
id_adotante INT NOT NULL,
mensagem Varchar(150),
data_hora timestamp(0)
);

CREATE SEQUENCE img_pets_seq;

CREATE TABLE img_pets (
id_img INT PRIMARY KEY DEFAULT NEXTVAL ('img_pets_seq') UNIQUE,
id_pet INT NOT NULL,
img_pet Varchar(150) NOT NULL,
perfil smallint
);

ALTER TABLE endereco ADD FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE;
ALTER TABLE evento ADD FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE;
ALTER TABLE evento ADD FOREIGN KEY(id_endereco) REFERENCES endereco(id_endereco) ON DELETE CASCADE;

ALTER TABLE pet ADD FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE;
ALTER TABLE pet ADD FOREIGN KEY(id_endereco) REFERENCES endereco(id_endereco) ON DELETE CASCADE;

ALTER TABLE mensagens ADD FOREIGN KEY(id_pet) REFERENCES pet(id_pet) ON DELETE CASCADE;
ALTER TABLE mensagens ADD FOREIGN KEY(id_doador) REFERENCES usuario(id_usuario) ON DELETE CASCADE;
ALTER TABLE mensagens ADD FOREIGN KEY(id_adotante) REFERENCES usuario(id_usuario) ON DELETE CASCADE;
ALTER TABLE img_pets  ADD FOREIGN KEY(id_pet) REFERENCES pet(id_pet) ON DELETE CASCADE;