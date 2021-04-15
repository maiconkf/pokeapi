import React from 'react';
import {Content} from './style';

function Hero({color, children}) {
  return <Content color={color}> {children} </Content>;
}

export default Hero;
