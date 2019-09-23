import React from 'react';
import PropTypes from 'prop-types';

const ChecklistItem = ({ text, isChecked, onChange }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={e => onChange(e.target.checked)}
    />
    <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
      {text}
    </p>
  </div>
);

ChecklistItem.propTypes = {
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ChecklistItem;
