import React from 'react';
import { Text, TouchableOpacity, Alert, Switch } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as S from '../../styles/auth/Register.styles';

interface IRegisterInputs {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

const Register: React.FC = () => {
  const navigation = useNavigation<any>();
  const { control, handleSubmit } = useForm<IRegisterInputs>({
    defaultValues: { terms: false }
  });

  const onSubmit: SubmitHandler<IRegisterInputs> = async (data) => {
    try {
      await axios.post('http://localhost:3000/auth/register', data);
      Alert.alert("Sucesso", "Registro realizado com sucesso!");
      navigation.navigate('Login');
    } catch (error: any) {
      Alert.alert("Erro", "Falha ao criar conta.");
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.Title>Criar Conta</S.Title>
        <S.Subtitle>Preencha os dados abaixo para começar.</S.Subtitle>

        <S.Label>Nome Completo</S.Label>
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <S.Input placeholder="Seu nome" onChangeText={onChange} value={value} />
          )}
        />

        <S.Label>Email</S.Label>
        <Controller
          control={control}
          name="email"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <S.Input placeholder="nome@exemplo.com" onChangeText={onChange} value={value} autoCapitalize="none" keyboardType="email-address" />
          )}
        />

        <S.Label>Senha</S.Label>
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <S.Input placeholder="No mínimo 8 caracteres" onChangeText={onChange} value={value} secureTextEntry />
          )}
        />

        <S.TermsContainer>
          <Controller
            control={control}
            name="terms"
            render={({ field: { onChange, value } }) => (
              <Switch value={value} onValueChange={onChange} trackColor={{ false: "#ccc", true: "#000" }} />
            )}
          />
          <S.TermsText>Eu concordo com os Termos de Serviço e a Política de Privacidade.</S.TermsText>
        </S.TermsContainer>

        <S.Button onPress={handleSubmit(onSubmit)}>
          <S.ButtonText>Cadastrar agora</S.ButtonText>
        </S.Button>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
          <S.Subtitle>Já possui uma conta? <Text style={{ fontWeight: 'bold', color: '#000' }}>Fazer login</Text></S.Subtitle>
        </TouchableOpacity>
      </S.Card>
    </S.Container>
  );
};

export default Register;