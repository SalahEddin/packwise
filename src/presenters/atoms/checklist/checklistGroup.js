import React from 'react';
import PropTypes from 'prop-types';
import ChecklistItem from 'presenters/atoms/checklist/ChecklistItem';
import {
  GroupContainer,
  CheckboxesContainer
} from 'presenters/atoms/checklist/index.styles';
import { Heading } from 'grommet';

function ChecklistGroup({ title, items, onChange }) {
  ChecklistGroup.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
  };

  if (!items.length) return null;
  
  return (
    <GroupContainer>
      <Heading level={2}>{title}</Heading>
      <CheckboxesContainer>
        {items.map(i => (
          <ChecklistItem
            key={i.key}
            text={i.text}
            isChecked={i.isChecked}
            onChange={newState => onChange(i.key, newState)}
          ></ChecklistItem>
        ))}
      </CheckboxesContainer>
    </GroupContainer>
  );
}

export default ChecklistGroup;
