import styled from '@emotion/styled';

const GroupContainer = styled('div')`
display: flex;
flex-direction: column;
max-height: 700px;
width: 100%;
justify-content: start;
align-items: stretch;
padding-left: 1rem
`;

const CheckboxesContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export { GroupContainer, CheckboxesContainer };
