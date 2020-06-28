import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


class Icon extends Component {
  render() {
    return (
      <FontAwesomeIcon {...this.props} />
    )
  }
}


const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class Spinner extends Component {
  spinValue = new Animated.Value(0);

  componentDidMount() {
    this.spin();
  }

  componentWillUnmount() {
    this.spinValue.removeAllListeners();
  }

  spin = () => {
    this.spinValue.setValue(0);

    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: this.props.duration,
      easing: this.props.easing || Easing.linear,
      useNativeDriver: true,
    }).start(() => this.spin());
  };

  render() {
    const { style, icon, color, size } = this.props;
    const rotate = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <AnimatedIcon
        style={[
          { transform: [{ rotate }] },
          style,
        ]}
        icon={icon}
        color={color}
        size={size}
      >
      </AnimatedIcon>
    );
  }
}

Spinner.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.any,
  color: PropTypes.string,
  size: PropTypes.number,
  duration: PropTypes.number,
  easing: PropTypes.oneOf([undefined, Easing.linear, Easing.sin, Easing.quad])
};

Spinner.defaultProps = {
  style: {},
  color: '#fff',
  size: 22,
  easing: Easing.linear,
  duration: 500,
};

export default Spinner;
