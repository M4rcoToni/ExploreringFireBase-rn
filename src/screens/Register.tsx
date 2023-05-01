import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/firebase';

import { Title } from '../components/Title';
import { Input } from '../components/Input';
import { ButtonApp } from '../components/Button';
import { OtherButton } from '../components/OtherButton';

type FormDataProps = {
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  email: yup.string().required('Informe  o e-mail.').email('E-mail inválido.'),
  password: yup.string().required('Informe  a senha.').min(6, 'A senha deve ter no mínimo 6 dígitos.'),
  password_confirm: yup.string().required('Informe  a confirmação da senha.').oneOf([yup.ref('password'), null], 'As senhas devem ser iguais.')
})

export function Register() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth(app);

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  function handleNewAccount({ email, password, password_confirm }: FormDataProps) {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => Alert.alert('Conta', 'Cadastrado com sucesso!'))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    setIsLoading(false)
  }

  return (
    <View className='flex-1 items-center justify-center  bg-appwhite-200'>
      <View className='my-8'>
        <Title
          text='Crie sua conta' />
      </View>

      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder='E-mail'
            onChangeText={onChange}
            errorMessage={errors.email?.message}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name='password'
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder='Senha'
            password
            secureTextEntry
            onChangeText={onChange}
            value={value}
            errorMessage={errors.password?.message}
          />
        )}
      />

      <Controller
        control={control}
        name='password_confirm'
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder='Confirme a senha'
            password
            secureTextEntry
            onChangeText={onChange}
            value={value}
            errorMessage={errors.password_confirm?.message}
            onSubmitEditing={handleSubmit(handleNewAccount)}
            returnKeyType='send'
          />
        )}
      />

      <View className='mt-5'>
        <ButtonApp
          isLoading={isLoading}
          onPress={handleSubmit(handleNewAccount)}
          title='Cadastrar'
        />
      </View>

      <View className='flex-row mt-12'>
        <OtherButton
          onPress={() => navigation.goBack()}
          title='Ja estou cadastrado'
          iconName='arrow-left'
        />
      </View>

    </View>
  );
}