import React from 'react';
import {Row} from 'react-simple-flex-grid';
import {Item, Number, Name, Type, Left, Right, Image} from './style';

function Card({data}) {
  return (
    <Item to={data.name}>
      <Row justify="space-between">
        <Left>
          <Name>{data.name}</Name>
          {data.types.map(({type, slot}) => (
            <Type key={slot} type={type.name}>
              {type.name}
            </Type>
          ))}
        </Left>
        <Right justify="end">
          <Number>#{data.id.toString().padStart(3, '0')}</Number>
          <Image
            src={data.sprites.other['official-artwork'].front_default}
            alt={data.name}
            width="150"
            height="150"
            loading="lazy"
          />
        </Right>
      </Row>
    </Item>
  );
}

export default Card;
