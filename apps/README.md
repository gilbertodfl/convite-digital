# convite digital

É um projeto do curso realizado na COD3R na escola.formacao.dev. ( Leandro Leitão )

Nele temos o uso do nest.js, typescript, prisma, react ( na parte browser ) e react native na parte mobile. 
Também usamos bibliotecas de UUID e QRCODE. 

Nesta versão, apesar do backend já está funcioando, os módulos ainda não estão interligados. De modo 
que as consulta no frontend ainda são em memória. 


Baixe os arquivos e instales os requisitos se necessário. 
Se já estiver com o node instalado, em tese precisa apenas o npm:
```bash

cd APRENDIZADO/cod3r/convite-digital-mobile
npm i  
```
No raiz do projeto rode

```bash
  npm i  
```
ao separar o projeto packages/core rodei o comando para gerar um package.json limpo. 

```bash
npm init -y  
```

#### Instale  o tsup
Compile tudo que está em typescript gerando um único arquivo javascript. 
```bash
npm install -g ts-node
npm i -D tsup 
```

Instale o gerador de uuid:
```bash
npm i -D @types/uuid
```

### IMPORTANTE LEMBRAR:
    Como o core colocamos como um pacote a ser usado tanto pelo backend como pelo frontend, devemos configurar 
    em ambos esse dependência: 
    arquivo: frontend/package.json
```bash
    dependencies": {
    "core": "*",
    }
```

O nome core foi tirado de packages/core/package.json ===>   "name": "core",

Uma fez feito no frontend e backend, não esqueça de rodar: npm i no raiz. 

URLS DO PROJETO: 

  Abre no menu principal:

  http://localhost:3000
    


  http://localhost:3000/evento

  http://localhost:3000/eventos

  http://localhost:3000/convite/evento-fullstack

  

  No backend:

  http://localhost:4000/eventos
  
  http://localhost:4000/ping

  mais detalhes veja no arquivo controller da pasta backend. 

## CONFIGURANDO O PRISMA
```bash
   node --version 
   v22.14.0
   cd backend
   npm install prisma --save-dev
```    
### USANDO SQLITE
  Inicalmente vamos usar o sqlite e depois migraremos para postgresql 
  rode dentro do backend: 
```bash
  cd /home/gilberto/APRENDIZADO/cod3r/convit3-digital/apps/backend
  npx primsa init --datasource-provider sqlite
```    
### DICA: Instale a extensão PRISMA da prisma.io no VSCODE e sqliteview

### Onde fica a definição das tabelas no prisma?

veja em prisma/schema.prisma. 
Observe que os campos tem sempre maísculo como String, Int, Date, Boolean

### como começo o primeiro database?
npx prisma migrate dev

### como povoar o database?
Veja o arquivo backend/prisma/seed.ts
E atualize o backend/package.json 
```
  "prisma": {
    "seed": "npx ts-node ./prisma/seed.ts"
  }
```
## Como faço para recriar do zero novamente? 
Basta apagar o arquivo dev.db e a pasta migrations. 
Após isto é só rodar o migrate novamente. 
```bash
  npx prisma migrate dev reset 
```    


### Outro comando que também roda bem, seria : 
```bash
  npx prisma migrate dev --name init
```    

## PRINCIAIS COMANDO NEST
cria um module chamado eventos
```bash
nest g mo eventos 
```    

### cria um controller

, ( sem criar pasta  -- flat) sem o arquivo de teste --no_spec
```bash
nest g co eventos --flat --no-spec
```    

## MOBILE

Ao baxiar o zip, não esqueça de rodar: 
```bash
npm i 
cd backend/prisma
npx prisma migrate dev reset 
```    
## Instalando o storage local
npx expo install @react-native-async-storage/async-storage

## CONFIGURANDO A CAMERA MOBILE
```bash
cd mobile
npx expo install expo-camera

```    
### Configure o arquivo mobile/app.json para usar a camera do celular
```bash
 "permissions": [
        "android.permission.CAMERA",
        "android.permission.RECORD_AUDIO",
        "android.permission.CAMERA",
        "android.permission.RECORD_AUDIO"
      ],
e também: 
 [
        "expo-camera",
        {
          "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera",
          "microphonePermission": "Allow $(PRODUCT_NAME) to access your microphone",
          "recordAudioAndroid": true
        }
      ],      
```    
### Configure QR-CODE

https://www.npmjs.com/package/react-qr-code

```bash
npm i react-qr-code
```

## Rodando o aplicativo no dia a dia : 
cd convite-digital-mobile
npm run dev

# USANDO WORKSPACE - monolítico

npm i npm-run-all

Agora atualize o package.json criando o abaixo:
```bash
 "workspaces": [
    "apps/*",
    "packages/*"
  ],

  e também acrescente o abaixo: 

 "scripts": {
    "dev": "run-p packages:* apps:*",
    "apps:frontend": "cd apps/frontend && npm run dev",
    "apps:backend": "cd apps/backend && npm run start:dev",
    "apps:mobile": "cd apps/mobile && npm run android",
    "packages:core": "cd packages/core && npm run dev"
  },
```  
e por último no arquivo backend/package.json coloque a linha abaixo:
```bash
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
```
Agora é só rodar.

npm run dev no raiz. 