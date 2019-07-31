# pets_heroes_api

<h2> Funcionalidades </h2>
<ul>
    <li><a href="#usuarios" >CRUD Usuarios</a></li>
    <li><a href="#endereco" >CRUD Endereço</a></li>
    <li><a href="#pets" >CRUD Pets</a></li>
    <li><a href="#eventos" >CRUD Eventos</a></li>
    <li><a href="#mensagens" >CRUD Mensagens</a></li>
</ul>
<div id="usuarios">
<h3>Usuários(criado)</h3>
<p>Programa deve permitir cadastro, alteração, exclusão e listagem de usuarios. Os dados recebidos do front: email(Obrigatório), senha, nome(obrigatório), telefone, imagem, status("A"-ativo, "P"-pendente, "I"-inativo), tipo("P"-pessoa, "I"-instituição), link-facebbok, link-instagram, whatsapp. </p>
<p>A senha não é obrigatória porque futuramente será possível autenticar com google ou facebook.</p>
<p>No arquivo pets.sql disponível no repositório é possível visualizar os campos da tabela e seus determinados tipos.</p>
</div>

<div id="endereco">
<h3>Endereço(criado)</h3>
<p>Programa deve permitir cadastro, alteração, exclusão e listagem de endereços. Os dados recebidos do front: 
id do usuario(obrigatório), rua(obrigatório), numero(obrigatório), bairro(obrigatório), cidade(obrigatório), estado(obrigatório). </p>
<p>No arquivo pets.sql disponível no repositório é possível visualizar os campos da tabela e seus determinados tipos.</p>
</div>
<div id="pets">
<h3>Pets(criado)</h3>
<p>Programa deve permitir cadastro, alteração, exclusão e listagem de pets. Os dados recebidos do front: 
id do usuario(obrigatório), nome do pet(obrigatório), id do endereco(obrigatório), idade do pet (obrigatório), especie(obrigatório), porte(obrigatório), descricao (obrigatório), status("D"-disponível, "A"-adotado, "P"- perdido, "E"- encontrado)  </p>
<p>O cadastro dos pets deve permitir a inclusão de fotos que serão gravadas em outra tabela, cada imagem deve ser gravada com o id do pet e uma flag para definir a foto do perfil</p>
<p>No arquivo pets.sql disponível no repositório é possível visualizar os campos da tabela e seus determinados tipos.</p>
</div>
<div id="eventos">
<h3>Eventos</h3>
<p>Programa deve permitir cadastro, alteração, exclusão e listagem de eventos, apenas se o tipo do usuário é "I"- instituição. Os dados recebidos do front: 
id do usuario(obrigatório), id do endereco(obrigatório), data(obrigatório), titulo(obrigatório), descrição(obrigatório), imagem(obrigatório). </p>
<p>No arquivo pets.sql disponível no repositório é possível visualizar os campos da tabela e seus determinados tipos.</p>
</div>
<div id="mensagens">
<h3>Mensagens</h3>
<p>Programa deve permitir cadastro, alteração, exclusão e listagem de mensagens. Os dados recebidos do front: 
id do pet(obrigatório), id do doador(obrigatório)-Usuario que cadastrou o pet, id do adotante(obrigatório)- Usuario interessado em adotar, mensagem(obrigatório)</p>
<p>No arquivo pets.sql disponível no repositório é possível visualizar os campos da tabela e seus determinados tipos.</p>
</div>
<p>*Observação: Seguir o padrão de desenvolvimento usado nas funcionalidades que já foram implementadas</p>

<h2>Passo a passo de como contribuir com o projeto</h2>
<a href="https://github.com/CodeSolidario/pets_heroes_api/blob/master/CONTRIBUITION.md"> CONTRIBUITION.md </a>
