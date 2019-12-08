import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'grommet';
import { QaContainer, QaSeparator } from './index.styles';

function QuestionContainer(props) {
  QuestionContainer.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired
  };
  return (
    <QaContainer>
      <Heading style={{marginLeft:0}} color={{"dark": "light-1", "light": "dark-2"}} margin="small" level={2}>
        {props.label}
      </Heading>
      <QaSeparator />
      {props.children}
    </QaContainer>
  );
}

export default QuestionContainer;
