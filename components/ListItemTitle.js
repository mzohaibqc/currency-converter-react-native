import React from 'react';
import styled from 'styled-components/native';

const ListItemTitle = styled.Text`
  font-size: ${(props) => `${props.fontSize || 16}px`};
  color: ${(props) => `${props.color || '#fff'}`};
  font-weight: 500;
`;


export default ListItemTitle;

