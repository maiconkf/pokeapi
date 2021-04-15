import React from 'react';
import {Content} from './style';

function Container(props) {
  const {children} = props;

  return <Content {...props}>{children}</Content>;
}

export default Container;
