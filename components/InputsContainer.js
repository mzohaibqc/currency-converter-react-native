import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

function InputsContainer({ translateY, style = {}, children }) {
  return (
    <Animated.View
      style={[style, { transform: [{ translateY }] }]}>
      {children}
    </Animated.View>
  );
}

InputsContainer.propTypes = {
  translateY: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
};

export default InputsContainer;