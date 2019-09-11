import React from 'react';

const ChecklistCardGroupListItem = ({ text, isChecked, onChange }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <input
      type="checkbox"
      defaultChecked={isChecked}
      onChange={e => onChange(e.target.checked)}
    />
    <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
      {text}
    </p>
  </div>
);

export default ChecklistCardGroupListItem;
