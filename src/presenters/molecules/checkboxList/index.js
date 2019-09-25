import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from 'grommet';
import { CheckboxesContainer, CheckboxesWrapper } from './index.styles';

function CheckBoxList(props) {
  CheckBoxList.propTypes = {
    setChecked: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool
      })
    ).isRequired
  };

  return (
    <CheckboxesContainer>
      {props.options.map(o => (
        <CheckboxesWrapper key={o.value}>
          <CheckBox
            checked={o.checked || false}
            label={o.label}
            onChange={event => props.setChecked(o.value, event.target.checked)}
          />
        </CheckboxesWrapper>
      ))}
    </CheckboxesContainer>
  );
}

export default CheckBoxList;
