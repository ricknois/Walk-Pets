import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Router from './src/router';

export default function App() {
  return (
    <>
      <StatusBar style="dark" translucent />
      <Router />
    </>
  );
}
