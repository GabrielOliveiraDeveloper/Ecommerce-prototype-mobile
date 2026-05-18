import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  padding: 20px;
`;

export const Card = styled.View`
  width: 100%;
  border: 1px solid #f3f4f6;
  padding: 32px;
  border-radius: 16px;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color: #000;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin-top: 8px;
  font-weight: 300;
`;

export const Label = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  color: #9ca3af;
  font-weight: 600;
  margin-bottom: 4px;
  letter-spacing: 1px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #000;
  margin-bottom: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  background-color: #000;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 500;
`;