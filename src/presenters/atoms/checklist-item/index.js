import React from 'react';
import PropTypes from 'prop-types';
import { StrikeableText } from 'presenters/atoms/checklist-item/index.styles';
import { CheckBox } from 'grommet';

const ChecklistItem = ({ text, isChecked, onChange }) => (
  <CheckBox
    type="checkbox"
    label={<StrikeableText isStriked={isChecked}>{text}</StrikeableText>}
    checked={isChecked}
    onChange={e => onChange(e.target.checked)}
  />
);

ChecklistItem.propTypes = {
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ChecklistItem;
