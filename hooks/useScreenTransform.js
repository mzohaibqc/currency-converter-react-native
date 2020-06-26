import React  from 'react';
import useKeyboardAnimation from './useKeyboardAnimation';

export default function useScreenTransform() {
  const scale = useKeyboardAnimation();
  const imageScale = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });
  const imageY = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [-40, 0],
  });
  const inputContainerY = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 30],
  });

  return {
    imageY, inputContainerY, imageScale
  }
}
