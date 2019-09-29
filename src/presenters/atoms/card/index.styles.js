import styled from '@emotion/styled';

const CardContainer = styled('section')`
  box-sizing: border-box;
  box-shadow: 0rem 0.0625rem 0.125rem
    ${props =>
      props.theme.card.boxShadowColor
        ? props.theme.card.boxShadowColor
        : 'rgba(0, 0, 0, 0.45)'};
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: ${props =>
    props.theme.card.maxHeight ? props.theme.card.maxHeight : '700px'};
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0')};
`;

const CardHeader = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.card.header.borderBottom};
  padding: 0.5rem 1rem;
`;

const CardBody = styled('div')`
  height: 100%;
  overflow: auto;
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0 1rem')};
`;

export { CardContainer, CardHeader, CardBody };
