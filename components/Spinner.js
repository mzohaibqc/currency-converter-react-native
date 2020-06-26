import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

class Spinner extends Component {
  spinValue = new Animated.Value(0);

  componentDidMount() {
    this.spin();
  }

  spin = () => {
    this.spinValue.setValue(0);

    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.spin());
  };

  render() {
    const { children, style } = this.props;
    const rotate = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Animated.View
        style={[
          { width: 30, height: 30, transform: [{ rotateZ: rotate }] },
          style,
        ]}>
        {children}
      </Animated.View>
    );
  }
}

Spinner.defaultProps = {
  style: {},
};

export default Spinner;
