# NLW-TOGETHER: TRILHA NODE-JS

## PROJETO A SER DESENVOLVIDO - NLW VALORIZA

- CADASTRO DE USUÁRIOS
- CADASTRO DE TAGS (ELOGIOS POSSIVEIS)

  - SOMENTE ADMIN

- CADASTRO DE ELOGIOS

  - ID DO USUÁRIO QUE VAI RECEBER ELOGIO
  - ID DO USUÁRIO QUE VAI ENVIAR O ELOGIO
  - ID DA TAG
  - DATA DA CRIAÇÃO

- AUTENTICAÇÃO DO USUÁRIO

  - GERAR TOKEN JWT (JSON WEB TOKEN)
  - VALIDAR USUÁRIO LOGADO NAS ROTAS NECESSARIAS

- LISTAGEM DE USUÁRIOS
- LISTAGEM DE TAGS
- LISTAGEM DE ELOGIOS POR USUÁRIO

## Metodos HTTP

- GET => buscar informação
- POST => inserir/Criar uma informação
- PUT => alterar uma informação
- DELETE => remover dados/informação
- PATCH => Alterar uma informação especifica

### Final da Aula 1

## TIPOS DE PARAMETROS DAS REQUISIÇÕES

- _Routes Params_ => fazem parte das rotas Ex: http://localhost:3000/productos/id_do_produto
- _Query Params_ => parametros que entram na query, usado normalmente em filtros , logo depois do ?, caso for maior que 1 separar por & , não obrigatorio. Ex: http://localhost:3000/produtos?name=teclado&rating=10

- _Body Params_ => parametros que chegam no corpo da requisição , nos metodos post put ou patch


## Regras do Crud

- Cadastro de úsuarios
  
   [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

   [x] Não é permitido cadastro de usuário sem e-mail


- Cadastro de TAG
  
  [ ] Não é permitido cadastar mais de uma tag com o mesmo nome 
  
  [ ] Não é permitido cadastar tag sem nome

  [ ] Não é permitido o cadastro por usuários que não sejam admistradores

  
- Cadastro de elogios

  [ ] Não é permitido um usuario cadastar um eleogio para sí

  [ ] Não é permitido cadastar elogios para usuarios inválidos

  [ ] O usuário precisa estar autenticado na aplicação 