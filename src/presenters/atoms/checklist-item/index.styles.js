import styled from '@emotion/styled';

const StrikeableText = styled('p')`
  text-decoration: ${props => (props.isStriked ? 'line-through' : 'none')};
  font-size: 1.2rem;
`;

export { StrikeableText };
