import React from 'react';
import { cleanup } from 'react-native-testing-library';
import 'jest-styled-components';
import { customRender } from './utils';

import Login from 'components/Login/Login';

afterEach(cleanup);



describe('<Login />', () => {  
  it('should render', () => {
    const { getByText, baseElement } = customRender(
      <Login />
    );
    expect(baseElement).toMatchSnapshot()
  });
});
