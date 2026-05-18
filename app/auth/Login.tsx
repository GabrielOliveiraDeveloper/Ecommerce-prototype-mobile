import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'expo-router'; 
import * as S from '../../styles/auth/Login.styles'; 

interface ILoginInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<ILoginInputs>();

  const onSubmit: SubmitHandler<ILoginInputs> = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', data);
      router.push('/home'); 
    } catch (error: any) {
      Alert.alert("Erro", "Falha ao realizar login.");
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.Title>Bem-vindo</S.Title>
        <S.Subtitle>Insira suas credenciais para acessar sua conta.</S.Subtitle>

        <S.Label style={{ marginTop: 20 }}>Email</S.Label>
        <Controller
          control={control}
          name="email"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <S.Input 
              placeholder="exemplo@email.com" 
              onChangeText={onChange} 
              value={value} 
              autoCapitalize="none" 
            />
          )}
        />

        <S.Label>Senha</S.Label>
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <S.Input 
              placeholder="••••••••" 
              onChangeText={onChange} 
              value={value} 
              secureTextEntry 
            />
          )}
        />

        <S.Button onPress={handleSubmit(onSubmit)}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>

        <TouchableOpacity onPress={() => router.push('/auth/Register')} style={{ marginTop: 20 }}>
          <S.Subtitle>
            Não tem uma conta? <Text style={{ fontWeight: 'bold', color: '#000' }}>Cadastre-se</Text>
          </S.Subtitle>
        </TouchableOpacity>
      </S.Card>
    </S.Container>
  );
};

export default Login;