import React from 'react';
import PropTypes from 'prop-types';
import ChecklistItem from 'presenters/atoms/checklist-item';
import { GroupContainer, CheckboxesContainer } from 'presenters/atoms/checklist-group/index.styles';

const ChecklistGroup = ({ title, items, onChange }) => (
  <GroupContainer>
    <h3>{title}</h3>
    <CheckboxesContainer>
      {items.length > 0 ? (
        items.map(i => (
          <ChecklistItem
            key={i.key}
            text={i.text}
            isChecked={i.isChecked}
            onChange={newState => onChange(i.key, newState)}
          ></ChecklistItem>
        ))
      ) : (
        <li></li>
      )}
    </CheckboxesContainer>
  </GroupContainer>
);

ChecklistGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ChecklistGroup;
