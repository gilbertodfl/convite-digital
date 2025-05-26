
## INSTALAÇÃO DO PRISMA

https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/generating-prisma-client

### INSTALANDO PRISMA

cd backend

npm install prisma --save-dev

### Inicializando já com o sqllite

cd backend

npx prisma init --datasource-provider sqlite

Se tudo tiver rodado certo, um arquivo está criado em 

backend/prisma/schema.prisma

Dentro deste arquivo defina suas tabelas. 

### Populando o banco de dados a partir do core/eventos

Dentro do arquivo backend/prisma/seed.ts faça referência ao arquivo 
core para popular o banco. 

Agora configure no arquivo backend/package.json o prisma para rodar o script seed
```bash
"prisma": {
    "seed": "npx ts-node ./prisma/seed.ts"
  }
```
Agora rode 

npx prisma migrate dev 

## Criando um módulo e controller

```bash
cd backend
net g module eventos 
nest g co eventos  --flat --no-spec
```

## Criando o módulo database

```bash
## vamos criar uma pasta chamada db com o módulo.
nest g mo db
## agora vamos criar um provider: 
cd backend/src/db
nest g pr prisma --flat --no-spec

```
No arquivo abaixo é onde faça a conexão/desconexão: 
Estamos usando o conceito de injenção de dependência

backend/src/db/prisma.provider.ts

Observe que criamos o arquivo 

backend/src/db/db.module.ts

Este arquivo importa o prisma.provider.ts que criamos. 
O uso passa ser com  DbModule que está exportado. 
Por sua vez, dentro de eventos/eventos.module.ts tenho que importar o DbModule. 

prisma.provider.ts --> db.module.t --> eventos.module.ts

## Criando o módulo provider evento.prisma

Aqui ele criou como provider e com o nome de evento.prisma, mas a ideia aqui é 
como se fosse um service. 

nest g pr evento.prisma --flat --no-spec
