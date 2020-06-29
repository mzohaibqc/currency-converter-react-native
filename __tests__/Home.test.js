import React from 'react';
import { render, cleanup, fireEvent } from 'react-native-testing-library';
import 'jest-styled-components';
import { customRender } from './utils';

import Home from 'components/Home/Home';

afterEach(cleanup);



describe('<Home />', () => {  
  it('should have title text', () => {
    const { getByText, baseElement } = customRender(
      <Home />
    );
    expect(getByText('Currency Converter')).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  });
});

// test('renders correctly', () => {
//   const tree = renderer.create(<Home />).toJSON();
//   expect(tree).toMatchSnapshot();
// });


// test('examples of some things', async () => {
//   const { getByTestId, getByText, queryByTestId, baseElement } = render(<Home />);
//   // const famousWomanInHistory = 'Ada Lovelace';

//   // const input = getByTestId('input');
//   // fireEvent.changeText(input, famousWomanInHistory);

//   // const button = getByText('Print Username');
//   // fireEvent.press(button);

//   // await wait(() => expect(queryByTestId('printed-username')).toBeTruthy());

//   // expect(getByTestId('printed-username').props.children).toBe(famousWomanInHistory);
//   // expect(baseElement).toMatchSnapshot();
// });