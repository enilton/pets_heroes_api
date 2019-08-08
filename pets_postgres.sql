CREATE TABLE usuario (
id_usuario serial UNIQUE,
email Varchar(150) UNIQUE,
senha Varchar(80),
nome Varchar(150),
telefone Varchar(11),
imagem Varchar(80),
status Varchar(1),
tipo Varchar(1),
fb Varchar(50),
instg Varchar(50),
wtsp Varchar(11),
data_cad date default current_timestamp,
PRIMARY KEY(id_usuario,email)
);

CREATE TABLE endereco (
id_endereco serial UNIQUE,
id_usuario INT NOT NULL,
rua Varchar(50),
num Varchar(11),
bairro Varchar(30),
cidade Varchar(50),
estado Varchar(50),
data_cad date default current_timestamp
);


CREATE TABLE evento (
id_evento serial UNIQUE,
id_usuario INT NOT NULL,
id_endereco INT NOT NULL,
data date,
titulo Varchar(50),
descricao Varchar(1500),
imagem Varchar(80),
data_cad date default current_timestamp
);

CREATE TABLE pet (
id_pet serial UNIQUE,
id_usuario INT NOT NULL,
id_endereco INT NOT NULL,
nome_pet Varchar(30) NOT NULL,
idade_pet int NOT NULL,
especie Varchar(50),
porte Varchar(30),
descricao Varchar(1500),
status Varchar(30),
data_cad date default current_timestamp
);


CREATE TABLE mensagens (
id_mensagem serial UNIQUE,
id_pet INT NOT NULL,
id_doador INT NOT NULL,
id_adotante INT NOT NULL,
mensagem Varchar(150),
data_hora date default current_timestamp
);

CREATE TABLE img_pets (
id_img serial PRIMARY KEY UNIQUE,
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