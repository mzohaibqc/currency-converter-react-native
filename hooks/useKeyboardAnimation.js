import React, { useEffect, useRef, useCallback } from 'react';
import {
  Keyboard,
  Animated,
  Easing,
} from 'react-native';

export default function useKeyboardAnimation() {
  const scale = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardShow);
      Keyboard.removeListener('keyboardDidHide', onKeyboardHide);
    };
  }, []);

  const onKeyboardShow = useCallback(() => {
    Animated.timing(scale, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  const onKeyboardHide = useCallback(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  return scale;
}
