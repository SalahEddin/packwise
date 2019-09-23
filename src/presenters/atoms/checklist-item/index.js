import React from 'react';
import PropTypes from 'prop-types';
import { StrikeableText, Checkbox } from 'presenters/atoms/checklist-item/index.styles';

const ChecklistItem = ({ text, isChecked, onChange }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Checkbox
      type="checkbox"
      checked={isChecked}
      onChange={e => onChange(e.target.checked)}
    />
    <StrikeableText isStriked={isChecked}>
      {text}
    </StrikeableText>
  </div>
);

ChecklistItem.propTypes = {
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ChecklistItem;
