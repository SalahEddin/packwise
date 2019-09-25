import styled from '@emotion/styled';

const CheckboxesContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0 1rem')};
`;

const CheckboxesWrapper = styled('div')`
  margin-top: ${props => (props.margin ? props.margin : '0.3em')};
`;
export { CheckboxesContainer, CheckboxesWrapper };
