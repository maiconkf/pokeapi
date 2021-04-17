import React from 'react';
import {Row, Col} from 'react-simple-flex-grid';
import Card from '../Card';

function List({data}) {
  return (
    <Row gutter="14" align="middle">
      {data.map((item, idx) => (
        <Col key={idx} xs={12} sm={6} lg={4}>
          <Card data={item} />
        </Col>
      ))}
    </Row>
  );
}

export default List;
