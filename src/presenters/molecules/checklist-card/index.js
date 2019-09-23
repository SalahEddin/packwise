import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChecklistGroup from 'presenters/atoms/checklist-group/index';
import { CardContainer } from 'presenters/molecules/checklist-card/index.styles';

function ChecklistCard(props) {
  ChecklistCard.prototype = {
    initalCheckListItemsState: PropTypes.array.isRequired
  };
  const [checklistItems, setChecklistItems] = useState(
    props.initalCheckListItemsState
  );
  function groupBy(data, key) {
    // `data` is an array of objects, `key` is the key (or property accessor) to group by
    // reduce runs this anonymous function on each element of `data` (the `item` parameter,
    // returning the `storage` parameter at the end
    return data.reduce(function(storage, item) {
      // get the first instance of the key by which we're grouping
      var group = item[key];

      // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
      storage[group] = storage[group] || [];

      // add this item to its group within `storage`
      storage[group].push(item);

      // return the updated storage to the reduce function, which will then loop through the next
      return storage;
    }, {}); // {} is the initial value of the storage
  }
  function onItemStatusChange(key, newState) {
    setChecklistItems(
      checklistItems.map(x =>
        x.key === key ? { ...x, isChecked: newState } : x
      )
    );
  }

  function generateCardGroups() {
    if (checklistItems.length <= 0) return <p>{'Nothing to pack.'}</p>;
    let groups = groupBy(checklistItems, 'collection');
    if (groups.length <= 0) return <p>{'Nothing to pack.'}</p>;

    return Object.entries(groups).map(([key, values]) => (
      <ChecklistGroup
        title={key}
        key={key}
        items={values}
        onChange={(key, checkedState) => onItemStatusChange(key, checkedState)}
      ></ChecklistGroup>
    ));
  }

  return <CardContainer>{generateCardGroups()}</CardContainer>;
}

export default ChecklistCard;
