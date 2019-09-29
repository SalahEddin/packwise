import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import Card from 'atoms/card';
import { Save } from 'grommet-icons';

const card = storiesOf('Atoms|Card', module).addDecorator(withKnobs);

card.add('card', () => {
  const showHeader = boolean('Show header', true);

  return (
    <Card
      header={'Food'}
      onIconClick={() => {}}
      Icon={Save}
      showHeader={showHeader}
    >
      <p>Card</p>
    </Card>
  );
});
