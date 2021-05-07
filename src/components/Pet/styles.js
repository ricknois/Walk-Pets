import styled from 'styled-components/native'
import {  Dimensions } from 'react-native'


export const Container = styled.View`
  align-self: center;
  margin: ${Math.round(Dimensions.get('window').width/15)}px;
  background-color: #3767B5;
  width: 80%;
  height: ${Math.round(Dimensions.get('window').width/2)}px;
  border-radius: ${Math.round(Dimensions.get('window').width/25)}px;
  border-width: 2px;
`;

export const Logo = styled.Image`
  margin-top: -${Math.round(Dimensions.get('window').width/20)}px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-self: center;
`;

export const Name = styled.Text`
  margin-top:  ${Dimensions.get('window').height/50};
  margin-left: 10px;
`;

export const Bad = styled.Text`
  background-color: red;
  text-align: center;
  justify-content: center;
  max-width: 30px;
  border-radius: 15px;
`;
export const Good = styled.Text`
  background-color: green;
  text-align: center;
  justify-content: center;
  max-width: 30px;
  border-radius: 15px;
`;
export const Regular = styled.Text`
  background-color: yellow;
  text-align: center;
  max-width: 32px;
  border-radius: 16px;
`;