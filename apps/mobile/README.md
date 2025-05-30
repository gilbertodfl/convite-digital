# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


Atualizar as dependências do Expo
Se você estiver usando o Expo, você pode tentar atualizar para a versão mais recente com
npx expo install --fix

## COMO TROCAR DE FORMA LIMPA DO NPM PARA YARN
### Limpar cache do npm e yarn
npm cache clean --force
yarn cache clean

### Apague pastas que podem ter lixo de build
```bash
rm -rf node_modules
rm -rf android/.gradle
rm -rf android/build
rm -rf .expo
rm -rf .expo-shared
rm -rf .next
rm -rf dist
rm -rf .turbo
```
#### Reinstale os modules
yarn install

## COMO ATUALIZAR EXPO CLI
Atualize o Expo CLI e o SDK
Certifique-se de que as versões estejam alinhadas com o que o projeto espera:
```bash
npx expo upgrade
```
## MONOREPO COM EXPOGO

A configuração de variáveis de ambiente como EXPO_USE_METRO_WORKSPACE_ROOT=1 é especialmente importante em estruturas de monorepo, como a do seu projeto. Isso permite que o Metro bundler navegue corretamente na árvore de dependências e encontre os módulos que precisa.
Algumas dicas adicionais para trabalhar com projetos Expo em monorepos:

Mantenha um arquivo .env na raiz com essas configurações para não precisar defini-las manualmente a cada vez
Se você usar ferramentas como Turbo ou Nx para gerenciar o monorepo, verifique a integração delas com o Expo

Defina a variável no arquivo .env conforme abaixo: 
EXPO_USE_METRO_WORKSPACE_ROOT=1

## icones react

https://www.npmjs.com/package/@tabler/icons-react

cd apps/frontend

Como estamos num momento de transição para a 19, use o force. 
npm i @tabler/icons-react --force

yarn

npm dev start 