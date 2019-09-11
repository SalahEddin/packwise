import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  CardHeader,
  CardBody
} from 'presenters/atoms/card/index.styles';
import { Save } from 'grommet-icons';

function Card(props) {
  Card.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.string.isRequired
  };

  return (
    <CardContainer>
      <CardHeader>
        <span>{props.header}</span>
        <Save />
      </CardHeader>
      <CardBody>{props.children}</CardBody>
    </CardContainer>
  );
}

export default Card;
