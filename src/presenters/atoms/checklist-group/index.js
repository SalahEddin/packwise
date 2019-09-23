import React from 'react';
import PropTypes from 'prop-types';
import ChecklistItem from 'presenters/atoms/checklist-item';

const ChecklistGroup = ({ title, items, onChange }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '700px',
      width: '100%',
      justifyContent: 'start',
      alignItems: 'stretch',
      boxShadow: '0rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.45)',
      paddingLeft:'1em'
    }}
  >
    <h3>{title}</h3>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
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
        <li>{'No items'}</li>
      )}
    </div>
  </div>
);

ChecklistGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ChecklistGroup;
