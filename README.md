# firebase-login-rn

## Descrição

Este é um aplicativo de login criado com React Native e Firebase. Ele inclui recursos como autenticação de e-mail/senha, login social com provedores como Google e Facebook, validação de formulário e gerenciamento de estado global com Context API.

## Instalação

1. Clone o repositório.
2. Instale as dependências usando o gerenciador de pacotes [npm](https://www.npmjs.com/):

   \`\`\`bash
   npm install
   \`\`\`

3. Crie um arquivo \`firebase.js\` na raiz do projeto com as credenciais do Firebase no formato:

   \`\`\`js
   export default {
     apiKey: 'YOUR_API_KEY',
     authDomain: 'YOUR_AUTH_DOMAIN',
     projectId: 'YOUR_PROJECT_ID',
     storageBucket: 'YOUR_STORAGE_BUCKET',
     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
     appId: 'YOUR_APP_ID',
   };
   \`\`\`

4. Inicie o aplicativo:

   \`\`\`bash
   npm start
   \`\`\`

   Isso iniciará o aplicativo em um navegador da web.

## Dependências

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Firebase](https://firebase.google.com/)
- [Yup](https://github.com/jquense/yup)
- [React Hook Form](https://react-hook-form.com/)
- [Moti](https://moti.fyi/)
- [NativeWind](https://github.com/native-ly/native-wind)
- [Expo](https://expo.io/)
- [Expo Updates](https://docs.expo.io/bare/updating-your-app/)
- [Expo Splash Screen](https://docs.expo.io/versions/latest/sdk/splash-screen/)
- [Expo Status Bar](https://docs.expo.io/versions/latest/sdk/status-bar/)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

