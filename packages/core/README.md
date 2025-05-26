## Como foi configurardo o core para ser usado como uma biblioteca

Precisamos do compilador typescript

tsup - compilador typescript

npm i -D tsup

package.json com os seguintes parametros. 
Veja que os arquivos serão gerados em dist/
O parametro --watch vai compilar toda vez que houver alteração.

```bash
{
  "name": "core",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "dev": "tsup src/index.ts --dts --watch",
    "build": "tsup src/index.ts --dts --minify"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "uuid": "^11.0.3"
  },
  "devDependencies": {
    "@types/uuid": "^10.0.0",
    "tsup": "^8.3.5"
  }
}
```
tsconfig.json
```bash
{
    "compilerOptions": {
        "target": "ES2021",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "module": "commonjs",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "strictNullChecks": false,
        "skipLibCheck": true
    }
}
```

IMPORTANTE LEMBRAR: veja que o nome é core. Logo, no backend e fronted 
faça referência a ele em cada arquivo package.json para ficarem amarrados. 
./backend/package.json
```bash
"dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/platform-express": "^10.0.0",
    "@prisma/client": "^5.22.0",
    "core": "*", // <------ AMARRADO COM packages/core
    "reflect-metadata": "^0.2.0",
    "rxjs": "^7.8.1"
  },
  ```
  Só isto não é suficiente, depois de salvar instale  as dependências ( no caso as geradas do core)

  npm i 
  
  
