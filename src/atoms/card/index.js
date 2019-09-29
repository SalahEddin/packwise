import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  CardHeader,
  CardBody
} from 'atoms/card/index.styles';

function Card(props) {
  Card.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.string.isRequired,
    onIconClick: PropTypes.func.isRequired,
    Icon: PropTypes.node.isRequired,
    showHeader: PropTypes.bool.isRequired
  };

  const { Icon, children, header, onIconClick, showHeader } = props;

  return (
    <CardContainer>
      {showHeader && (
        <CardHeader>
          <span>{header}</span>
          <Icon onClick={onIconClick} />
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
    </CardContainer>
  );
}

export default Card;
