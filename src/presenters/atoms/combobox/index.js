import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'grommet';

function Combobox(props) {
  Combobox.propTypes = {
    selectedOption: PropTypes.any,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  };
  return (
    <Select
      valueKey={o => o.id}
      labelKey={o => o.name}
      options={props.options}
      value={props.selectedOption}
      onChange={({ option }) => props.onChange(option)}
    />
  );
}

export default Combobox;
