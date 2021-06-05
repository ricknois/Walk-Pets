import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  align-self: center;
  margin: ${Math.round(Dimensions.get('window').width / 15)}px;
  background-color: #3767B5;
  width: 80%;
  height: ${Math.round(Dimensions.get('window').width / 2.3)}px;
  border-radius: ${Math.round(Dimensions.get('window').width / 25)}px;
  border-width: 2px;
`;
export const ModalView = styled.View`
    margin: 200px;
    max-width: 50px;
    max-height: 50px;
`;

export const Logo = styled.Image`
  margin-top: -${Math.round(Dimensions.get('window').width / 20)}px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-self: center;
`;

export const Name = styled.Text`
  margin-top:  ${Dimensions.get('window').height / 50}px;
  align-self: center;
  font-size: 20px;
`;
export const Walk = styled.Text`
  margin-top:  ${Dimensions.get('window').height / 50}px;
  font-size: 15px;
  text-align: center;
  align-self: center;
`;

export const Bad = styled.Text`
  margin-top:  ${Dimensions.get('window').height / 50}px;
  background-color: red;
  max-width: 30px;
  border-radius: 15px;
  align-self: center;
`;
export const Good = styled.Text`
  margin-top:  ${Dimensions.get('window').height / 50}px;
  background-color: green;
  max-width: 30px;
  border-radius: 15px;
  align-self: center;
`;
export const Regular = styled.Text`
  margin-top:  ${Dimensions.get('window').height / 50}px;
  background-color: yellow;
  max-width: 30px;
  border-radius: 15px;
  align-self: center;
`;
