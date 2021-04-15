import React from 'react';
import {Btn} from './style';

function Button(props) {
  const {children} = props;

  return <Btn {...props}>{children}</Btn>;
}

export default Button;
