![pokemon](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/300px-International_Pok%C3%A9mon_logo.svg.png)

# **Teste Front-End ReactJS**

## 💻 **O desafio**

Desenvolver uma aplicação web com o objetivo de avaliarmos o seu domínio em front-end, ou seja, sua organização, estilo e boas práticas com o código, conhecimento dos frameworks e tecnologias utilizadas.

#
## 🔗 **Links**
#### **Segue links uteis para resolução do desafio:**
- [PokéApi](https://pokeapi.co/)
- [Layout Desktop](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=13%3A13571&scaling=min-zoom)
- [Layout Mobile](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=41%3A18782&scaling=min-zoom)
- [Style Guide](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=36%3A2135&scaling=min-zoom)
- [Componentes](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=27%3A18584&scaling=min-zoom)
- [Issues](https://bitbucket.org/fdtedsd/teste-frontend/issues)

#
## 📝 **Fluxo e Funcionalidades da aplicação**
- [x] Landing page com um botão para iniciar a aplicação (qualquer url inexistente deve redirecionar o usuário para essa landing page).
- [x] Personagem no centro da página.
- [x] Barra na esquerda indicando quantos Pokémons ele já capturou (limite de 6) + botão de criação.
- [x] Ao passar o mouse no personagem é exibido o tooltip correspondente.
- [x] Ao clicar no personagem é feita uma busca por um Pokémon aleatório (id de 1 a 807).
- [x] Com o resultado da busca é aberto um modal mostrando os detalhes do Pokémon.
- [x] Usuário tem a opção de capturá-lo, clicando na pokébola, ou fechar o modal.
- [x] Se ele capturar o Pokémon, esse Pokémon é exibido na SideBar e o modal de captura desaparece.
- [x] Usuário pode capturar até 6 Pokémons.
- [ ] Selecionando qualquer Pokémon na SideBar o usuário pode ver os detalhes do Pokémon.
- [x] O(s) tipo(s) do Pokémon deve ser traduzido (ex: water => Água).
- [x] Usuário pode editar SOMENTE o nome de um Pokémon que foi capturado.
- [x] Na SideBar o usuário tem a possibilidade de criar um Pokémon (um Pokémon pode ter no máximo 2 "tipos").
- [x] O formulário de criação de Pokémon deve conter validações em todos os campos.
- [x] Caso algum campo não esteja preenchido, o botão de criação deve ficar bloqueado.
- [x] Para um Pokémon criado o usuário pode editar qualquer informação ou liberá-lo.
- [x] Sempre que liberar um Pokémon é possível capturar outro através da busca ou criar um customizado.
- [x] Caso as 6 posições estejam ocupadas o usuário não pode mais buscar nem criar novos Pokémons.
- [x] Responsividade para resoluções desktop e mobile. (Ex: 1280 x 720, 360 x 740)
#

## 📖 **Regras**
- Todo o seu código deve ser disponibilizado em um repositório público ou privado em seu Github ou Bitbucket pessoal;
- Envie o link para [FDTE RH](mailto:vanessa.bruno@fdte.io?subject=Teste_Front-End_ReactJS);
- Escolha uma das duas versões abaixo para realizar o teste:
  * Versão [com sass](https://bitbucket.org/fdtedsd/teste-frontend/src/master/examples/with-sass/);
  * Versão [com styled-components](https://bitbucket.org/fdtedsd/teste-frontend/src/master/examples/with-styled-components/);
- Utilizar a [PokéApi](https://pokeapi.co/) para interagir com a aplicação;
- Usar componentes funcionais e hooks;
- Não usar componentes de Class;
#
## 🚀 **Tecnologias**
#### **Para a resolução do desafio, fique a vontade para utilizar as tecnologias citadas abaixo:**

- react-redux
- redux
- redux-thunk
- redux-sagas
- axios
- storybook
- eslint
- node-sass
- styled-components
- prettier
- prop-types
- typescript
- react-hook-form
- formik
- yup

#
## ⚠️ **Observações**
- Fique a vontade para mudar a estrutura de como estão os exemplos;
- Muita atenção ao link das issues por que lá estão descritas as tarefas para serem executadas.
- Você pode implementar a aplicação usando typescript, assim como o uso de PropTypes.
- Mesmo a aplicação sendo pequena, o uso do redux está liberado.
- Os componentes devem ser responsivos.

#
## ➕ **Opcional**
#### **Esperamos que você tenha curiosidade em criar testes para aplicação, mas não se preocupe, isso é opcional**
 - Teste unitário
 - Teste de integração
 - Teste de interface

#
## 📝 **License**
**FDTE Copyright © 2020**
