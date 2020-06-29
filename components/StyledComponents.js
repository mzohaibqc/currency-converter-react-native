import React from 'react';
import styled from 'styled-components/native';
import { Animated, Easing } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Spinner from 'components/Spinner';

export const HeaderMenuIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #fff;
`;

export const HeaderIconContainer = styled.TouchableHighlight`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const AppLogoContainer = styled(Animated.View)`
  width: ${(props) => props.width || 250}px;
  height: ${(props) => props.width || 250}px;
`;

const inputContainerStyles = `
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  ${inputContainerStyles}
  margin-bottom: ${(props) => props.marginBottom || 20}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 45px;
  margin-left: 16px;
  border-bottom-color: #fff;
  font-size: ${(props) => props.fontSize || 16}px;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-left: 15px;
  justify-content: center;
`;

export const InputAddOn = styled.TouchableHighlight`
  padding-left: 15px;
  justify-content: center;
  height: 40px;
  width: 60px;
  shadow-offset: 0;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  border-right-width: 1px;
  border-right-color: #eee;
`;

export const FormInput = ({ inputProps, theme, icon }) => {
  return (
    <InputContainer>
      <Icon icon={icon} color={theme.color} size={20} />
      <TextInput underlineColorAndroid="transparent" {...inputProps} />
    </InputContainer>
  );
};

export const ButtonContainer = styled.TouchableOpacity`
  ${inputContainerStyles}
  align-self: center;
  background-color: ${(props) => props.backgroundColor || '#fff'};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  align-self: center;
  text-align: center;
  color: ${(props) => props.color || '#000'};
`;

export const LoginButton = ({ text, loading, onPress, color }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText color={color}>{text}</ButtonText>
      {loading && (
        <Spinner
          icon={faSpinner}
          color={color}
          size={20}
          duration={300}
          easing={Easing.linear}
          style={{ position: 'absolute', right: 10 }}
        />
      )}
    </ButtonContainer>
  );
};

export const FlatList = styled.FlatList`
  width: 100%;
`;

export const FavoriteContainer = styled.TouchableOpacity`
  width: 100px;
  height: 20px;
  flex-direction: row;
  align-items: flex-start;
`;
