<h1>Como contribuir</h1>
<ul>
<li>Faça um fork</li>
<li>Clone o que foi criado no seu github</h1>
<li>Adicione um novo remote ao git, com git remote add upstream git@github.com:CodeSolidario/pets_heroes_api.git </li>
<li>Crie uma branch develop (somente se já não existir), atualizada com a branch do upstream, com o comando: git checkout upstream/develop -b develop </li>
<li>Se já tiver a branch criada, acesse-a com git checkout develop e atualize com git pull upstream develop --force </li>
<li>Crie uma nova branch, onde você irá desenvolver a nova feature, com git checkout -b <nome-da-sua-branch> </li>
<li>Instale as dependências do projeto com npm install </li>
<li>Inicie o desenvolvimento da nova feature</li>
<li>Envie apenas uma feature por pull request</li>
<li>Ao terminar o seu código, faça os commits </li>
<li>Suba as alterações para o seu fork, com git push origin <nome-da-sua-branch></li>
<li>Envie um pull request no repositório https://github.com/CodeSolidario/pets_heroes_api, na branch develop</li>
<li> Aguarde sua feature ser adicionada </li>