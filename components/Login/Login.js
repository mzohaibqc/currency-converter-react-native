import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import selectors from '../../selectors';
import { login as loginAction } from '../../actions/app.actions';
import spinnerIcon from '../../assets/spinner.gif';
import AppLogo from '../AppLogo';
import InputsContainer from '../InputsContainer';
import useScreenTransform from '../../hooks/useScreenTransform';

function Login({}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const theme = useSelector(selectors.getTheme);
  const loading = useSelector(selectors.getLoginLoading);
  const dispatch = useDispatch();

  // Fake login
  const login = useCallback((username, password) => {
    if (username === '' || password === '' || loading) return;
    dispatch(loginAction.pending(username, password));
  });

  const { imageY, inputContainerY, imageScale } = useScreenTransform();

  return (
    <View style={[styles.container, { backgroundColor: theme.color }]}>
      <AppLogo scale={imageScale} translateY={imageY} />
      <InputsContainer style={styles.container} translateY={inputContainerY}>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            icon={faUser}
            color={theme.color}
            style={styles.inputIcon}
            size={20}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Username"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(value) => setUsername(value)}
            value={username}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            icon={faLock}
            color={theme.color}
            style={styles.inputIcon}
            size={20}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(value) => setPassword(value)}
            value={password}
          />
        </View>

        <TouchableHighlight
          underlayColor={theme.darkShade}
          style={[styles.buttonContainer, styles.loginButton, { backgroundColor: theme.color }]}
          onPress={() => login(username, password)}>
          <View style={styles.buttonContent}>
            <Text style={styles.loginText}>Login</Text>
            {loading && <Image source={spinnerIcon} />}
          </View>
        </TouchableHighlight>
      </InputsContainer>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    marginTop: 40
  },
  inputContainer: {
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
    marginBottom: 20,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 3,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButton: {
    borderColor: '#fff',
    borderWidth: 2,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  },
});
