import styled from '@emotion/styled';

const QaSeparator = styled('section')`
  margin: ${props => (props.margin ? props.margin : '1rem')};
  padding: ${props => (props.padding ? props.padding : '0')};
`;

const QaContainer = styled('div')`
  height: 100%;
  overflow: auto;
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0 1rem')};
`;

export { QaSeparator, QaContainer };
