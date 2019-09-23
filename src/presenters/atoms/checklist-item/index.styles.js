import styled from '@emotion/styled';

// increase the size of the checkbox
const Checkbox = styled('input')`
`;

const StrikeableText = styled('p')`
  text-decoration: ${props => (props.isStriked ? 'line-through' : 'none')};
`;

export { Checkbox, StrikeableText };
