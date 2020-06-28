import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faUser, faLock, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Screen from 'components/Screen';
import AppLogo from 'components/AppLogo';
import InputsContainer from 'components/InputsContainer';
import { LoginButton, FormInput } from 'components/StyledComponents';
import useScreenTransform from 'hooks/useScreenTransform';
import selectors from 'selectors';
import { login as loginAction } from 'actions/app.actions';

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
  }, []);

  const { imageY, inputContainerY, imageScale } = useScreenTransform();

  return (
    <Screen backgroundColor={theme.color}>
      <AppLogo scale={imageScale} translateY={imageY} />
      <InputsContainer translateY={inputContainerY}>
        <FormInput
          inputProps={{
            placeholder: 'Username',
            keyboardType: 'email-address',
            value: username,
            onChangeText: (value) => setUsername(value),
          }}
          theme={theme}
          icon={faUser}
        />
        <FormInput
          inputProps={{
            placeholder: 'Password',
            secureTextEntry: true,
            value: password,
            onChangeText: (value) => setPassword(value),
          }}
          theme={theme}
          icon={faLock}
        />

        <LoginButton
          onPress={() => login(username, password)}
          text="Login"
          loading={loading}
          color={theme.color}
        />
      </InputsContainer>
    </Screen>
  );
}

export default Login;


