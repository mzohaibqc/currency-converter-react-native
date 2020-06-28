import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Animated, Easing } from 'react-native';
import Svg, { Circle, Path, G, Text } from 'react-native-svg';

import selectors from 'selectors';
import { switchCurrencies } from 'actions/currency.actions';

function SvgLogo({ fill, width, height, showInfo, style }) {
  const dispatch = useDispatch();
  const theme = useSelector(selectors.getTheme);
  const baseCurrency = useSelector(selectors.getBaseCurrency);
  const targetCurrency = useSelector(selectors.getTargetCurrency);
  const [inverted, setInterted] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const onPress = useCallback(() => {
    if (!showInfo) return;
    setInterted((v) => !v);
    Animated.timing(animation, {
      toValue: inverted ? 0 : 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => dispatch(switchCurrencies.pending()));
  }, [inverted]);

  return (
    <Animated.View style={[style, { transform: [{ rotate }] }]}>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        onPress={onPress}
        width={width}
        height={height}>
        <G>
          <G>
            <Path
              d="M135,0C60.557,0,0,60.557,0,135s60.557,135,135,135s135-60.557,135-135S209.443,0,135,0z M135,240
			c-57.891,0-105-47.109-105-105S77.109,30,135,30s105,47.109,105,105S192.891,240,135,240z"
              fill={fill}
            />
          </G>
        </G>
        <G>
          <G>
            <Path
              d="M415.606,154.394c-5.859-5.859-15.352-5.859-21.211,0L390,158.789V105c0-24.814-20.186-45-45-45h-63.215
			c4.878,9.511,8.846,19.537,11.819,30H345c8.276,0,15,6.724,15,15v53.789l-4.395-4.395c-5.859-5.859-15.352-5.859-21.211,0
			s-5.859,15.352,0,21.211l29.982,29.981c5.95,5.966,15.47,5.793,21.248,0l29.982-29.981
			C421.465,169.746,421.465,160.253,415.606,154.394z"
              fill={fill}
            />
          </G>
        </G>
        <G>
          <G>
            <Path
              d="M218.396,422H167c-8.276,0-15-6.724-15-15v-53.789l4.395,4.395c5.86,5.859,15.351,5.859,21.211,0
			c5.859-5.859,5.859-15.352,0-21.211l-29.982-29.981c-5.908-5.924-15.488-5.775-21.248,0l-29.982,29.981
			c-5.859,5.859-5.859,15.352,0,21.211c5.859,5.859,15.352,5.859,21.211,0l4.395-4.395V407c0,24.814,20.186,45,45,45h63.215
			C225.337,442.489,221.369,432.463,218.396,422z"
              fill={fill}
            />
          </G>
        </G>
        <G>
          <G>
            <Circle cx="135" cy="135" r="75" fill={fill} />
            {showInfo && (
              <Text
                x={inverted ? 105 : 135}
                y="145"
                fill={theme.color}
                fontSize="30"
                fontWeight="bold"
                textAnchor="middle"
                transform={inverted ? 'rotate(180, 120, 135)' : 'rotate(0)'}>
                {baseCurrency}
              </Text>
            )}
          </G>
        </G>
        <G>
          <G>
            <Path
              d="M377,242c-74.443,0-135,60.557-135,135s60.557,135,135,135s135-60.557,135-135S451.443,242,377,242z M377,482
			c-57.891,0-105-47.109-105-105s47.109-105,105-105s105,47.109,105,105S434.891,482,377,482z"
              fill={fill}
            />
          </G>
        </G>
        <G>
          <G>
            <Circle cx="377" cy="377" r="75" fill={fill} />
            {showInfo && (
              <Text
                x={345}
                y="389"
                fill={theme.color}
                fontSize="30"
                fontWeight="bold"
                transform={inverted ? 'rotate(180, 375, 379)' : 'rotate(0)'}>
                {targetCurrency}
              </Text>
            )}
          </G>
        </G>
      </Svg>
    </Animated.View>
  );
}

SvgLogo.propTypes = {
  style: PropTypes.object,
  fill: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  showInfo: PropTypes.bool,
};

SvgLogo.defaultProps = {
  style: {},
  width: 250,
  height: 250,
  showInfo: false,
};

export default SvgLogo;
