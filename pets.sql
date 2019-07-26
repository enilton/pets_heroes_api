CREATE TABLE usuario (
id_usuario INT(50) AUTO_INCREMENT,
email Varchar(150),
senha Varchar(80),
nome Varchar(150),
telefone Varchar(11),
imagem Varchar(30),
status Varchar(1),
tipo Varchar(1),
fb Varchar(50),
instg Varchar(50),
wtsp Varchar(11),
data_cad datetime,
PRIMARY KEY(id_usuario,email)
)ENGINE=InnoDB;

CREATE TABLE endereco (
id_endereco INT(50) PRIMARY KEY AUTO_INCREMENT,
id_usuario INT(50) NOT NULL,
rua Varchar(50),
num Varchar(11),
bairro Varchar(30),
cidade Varchar(50),
estado Varchar(50),
data_cad datetime
)ENGINE=InnoDB;


CREATE TABLE evento (
id_evento INT(50) PRIMARY KEY AUTO_INCREMENT,
id_usuario INT(50) NOT NULL,
id_endereco INT(50) NOT NULL,
data date,
titulo Varchar(50),
descricao Varchar(1500),
imagem Varchar(50),
data_cad datetime
)ENGINE=InnoDB;

CREATE TABLE pet (
id_pet INT(50) PRIMARY KEY AUTO_INCREMENT,
id_usuario INT(50) NOT NULL,
id_endereco INT(50) NOT NULL,
nome_pet Varchar(30) NOT NULL,
idade_pet int(10) NOT NULL,
especie Varchar(50),
porte Varchar(30),
descricao Varchar(1500),
status Varchar(30),
data_cad datetime
)ENGINE=InnoDB;


CREATE TABLE mensagens (
id_mensagem INT(50) PRIMARY KEY AUTO_INCREMENT,
id_pet INT(50) NOT NULL,
id_doador INT(50) NOT NULL,
id_adotante INT(50) NOT NULL,
mensagem Varchar(150),
data_hora datetime
)ENGINE=InnoDB;

CREATE TABLE img_pets (
id_img INT(50) PRIMARY KEY AUTO_INCREMENT,
id_pet INT(50) NOT NULL,
img_pet Varchar(150) NOT NULL,
perfil tinyint(1)
)ENGINE=InnoDB;

ALTER TABLE endereco ADD FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE;
ALTER TABLE evento ADD FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE;
ALTER TABLE evento ADD FOREIGN KEY(id_endereco) REFERENCES endereco(id_endereco) ON DELETE CASCADE;

ALTER TABLE pet ADD FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE;
ALTER TABLE pet ADD FOREIGN KEY(id_endereco) REFERENCES endereco(id_endereco) ON DELETE CASCADE;

ALTER TABLE mensagens ADD FOREIGN KEY(id_pet) REFERENCES pet(id_pet) ON DELETE CASCADE;
ALTER TABLE mensagens ADD FOREIGN KEY(id_doador) REFERENCES pet(id_usuario) ON DELETE CASCADE;
ALTER TABLE mensagens ADD FOREIGN KEY(id_adotante) REFERENCES usuario(id_usuario) ON DELETE CASCADE;
ALTER TABLE img_pets  ADD FOREIGN KEY(id_pet) REFERENCES pet(id_pet) ON DELETE CASCADE;