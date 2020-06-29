import React from 'react';
import { cleanup, fireEvent } from 'react-native-testing-library';
import 'jest-styled-components';
import { customRender } from './utils';
import App from 'components/App';
import renderer from 'react-test-renderer';


afterEach(cleanup);

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: props => props.children,
}));

it('renders correctly', () => {
  const { getByText, baseElement } = customRender(
    <App />,
  );
  expect(baseElement).toMatchSnapshot()
});
