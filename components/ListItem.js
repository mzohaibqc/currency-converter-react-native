import React from 'react';
import styled from 'styled-components/native';

const ListItem = styled.View`
  display: flex;
  width: 100%;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  borderBottomWidth: ${(props) => `${props.isLast ? 0 : 1}px`};
  height: 50px;
  borderBottomColor: #eee;
  padding: ${(props) => `${props.padding || 10}px`};

`;


export default ListItem;

