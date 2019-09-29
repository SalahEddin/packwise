import styled from '@emotion/styled';

const GroupContainer = styled('div')`
  display: flex;
  flex-direction: column;
  max-height: 700px;
  width: 100%;
  justify-content: start;
  padding-left: 1rem;
`;

const CheckboxesContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const StrikeableText = styled('p')`
  text-decoration: ${props => (props.isStriked ? 'line-through' : 'none')};
  font-size: 1.2rem;
  padding: 0;
  margin: 0.2rem;
`;

export { GroupContainer, CheckboxesContainer, StrikeableText };
