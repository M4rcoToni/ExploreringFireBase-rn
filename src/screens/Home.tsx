import { View } from 'react-native';
import { ButtonApp } from '../components/Controllers/Button';

import { getAuth, signOut } from "firebase/auth";
import { app } from '../firebase/firebase';

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
      <ButtonApp
        title='Sair'
        onPress={handleLogout}
      />
    </View>
  );
}