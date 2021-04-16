import React from 'react';
import {Row, Col} from 'react-simple-flex-grid';
import Button from './Button';
import Input from './Input';

function Filter() {
  return (
    <form>
      <Row gutter="10">
        <Col xs={12} sm={10}>
          <Input />
        </Col>
        <Col xs={12} sm={2}>
          <Button color="dark" type="submit" data-cy="search">
            Search
          </Button>
        </Col>
      </Row>
    </form>
  );
}

export default Filter;
