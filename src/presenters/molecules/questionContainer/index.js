import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'grommet';
import { QaContainer, QaSeperator } from './index.styles';

function QuestionContainer(props) {
  QuestionContainer.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired
  };
  return (
    <QaContainer>
      <Heading margin="none" level={3}>
        {props.label}
      </Heading>
      <QaSeperator />
      {props.children}
    </QaContainer>
  );
}

export default QuestionContainer;
