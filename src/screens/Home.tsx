import { View } from 'react-native';

import { app } from '../firebase/firebase';
import { getAuth, signOut } from "firebase/auth";

import { ButtonApp } from '../components/Button';
import { Title } from '../components/Title';

export function Home() {
  const auth = getAuth(app);

  function handleLogout() {
    signOut(auth).then(() => {
      console.log('Logout')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <View className='bg-appwhite-200 flex-1 justify-center items-center'>

      <View className='my-20'>
        <Title
          text='Seja bem Vindo!'
        />
      </View>

      <ButtonApp
        title='Sair'
        onPress={handleLogout}
      />
    </View>
  );
}