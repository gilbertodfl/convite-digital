
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