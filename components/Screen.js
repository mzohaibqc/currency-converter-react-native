import styled from 'styled-components/native';

const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: ${props => props.justify || 'flex-start'};
  padding: ${(props) => `${props.padding || 10}px`};
  padding-top: ${(props) => `${props.paddingTop || 30}px`};
  background-color: ${(props) => props.backgroundColor || '#fff'};
`;

export default Screen;
