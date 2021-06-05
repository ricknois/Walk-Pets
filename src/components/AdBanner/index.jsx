import React from 'react';
import { AdMobBanner } from 'expo-ads-admob';
import { Container } from './style';
import { adID } from '../../helper';

export default function index() {
  return (
    <Container>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={adID}
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(err) => console.log(err)}
      />
    </Container>
  );
}
