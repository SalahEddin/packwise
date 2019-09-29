import React from 'react';
import PropTypes from 'prop-types';
import { StrikeableText } from 'presenters/atoms/checklist-item/index.styles';
import { CheckBox } from 'grommet';

function ChecklistItem({ text, isChecked, onChange }) {
  ChecklistItem.propTypes = {
    text: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  };
  return (
    <CheckBox
      type="checkbox"
      label={<StrikeableText isStriked={isChecked}>{text}</StrikeableText>}
      checked={isChecked}
      onChange={e => onChange(e.target.checked)}
    />
  );
}

export default ChecklistItem;
