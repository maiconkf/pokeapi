import React from 'react';
import {Row, Col} from 'react-simple-flex-grid';
import Card from '../Card';

function List({data}) {
  console.log(data.name);
  return (
    <Row gutter="14" align="middle">
      {data.length ? (
        data.map((item, idx) => (
          <Col key={idx} xs={12} sm={6} lg={4}>
            <Card data={item} />
          </Col>
        ))
      ) : (
        <Col key={data.id} xs={12} sm={6} lg={4}>
          <Card data={data} />
        </Col>
      )}
    </Row>
  );
}

export default List;
