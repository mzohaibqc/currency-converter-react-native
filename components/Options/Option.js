import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import ListItem from 'components/ListItem';
import ListItemTitle from 'components/ListItemTitle';
import selectors from 'selectors';

function Option({ title, icon, action, isLast }) {
  const theme = useSelector(selectors.getTheme);
  return (
    <ListItem isLast={isLast}>
      <ListItemTitle>{title}</ListItemTitle>
      <IconCircle onPress={action}>
        <FontAwesomeIcon icon={icon} color={theme.color} size={14} />
      </IconCircle>
    </ListItem>
  );
}

Option.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  action: PropTypes.func.isRequired,
};

export default Option;

const IconCircle = styled.TouchableOpacity`
   width: 26px;
   height: 26px;
   border-radius: 13px;
   background-color: #fff;
   align-items: center;
   justify-content: center;
`;